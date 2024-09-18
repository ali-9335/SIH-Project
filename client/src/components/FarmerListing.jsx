import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { stateOptions, districtData } from './state-district'; // Assuming you have state-district mappings
import 'bootstrap/dist/css/bootstrap.min.css';
import './FarmerListing.css'; // Assuming a separate CSS file for styling
import toast from 'react-hot-toast';

export default function FarmerListing() {
    const [farmerData, setFarmerData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedCrop, setSelectedCrop] = useState('');
    const [uniqueCrops, setUniqueCrops] = useState([]);
    const [bidAmount, setBidAmount] = useState({}); // To track bid amounts for each farmer

    // Fetch farmer data from the API
    useEffect(() => {
        axios.get('http://localhost:3000/api/farmerData')
            .then((res) => {
                setFarmerData(res.data);
                const crops = [...new Set(res.data.map(item => item.crop))];
                setUniqueCrops(crops);
            });
    }, []);

    // Handle state change
    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        setSelectedDistrict(''); // Reset district when state changes
    };

    // Handle district change
    const handleDistrictChange = (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);
    };

    // Handle crop change
    const handleCropChange = (e) => {
        const crop = e.target.value;
        setSelectedCrop(crop);
    };

    // Handle Search
    const handleSearch = () => {
        let filtered = farmerData;

        if (selectedState) {
            filtered = filtered.filter(farmer => farmer.state === selectedState);
        }

        if (selectedDistrict) {
            filtered = filtered.filter(farmer => farmer.district === selectedDistrict);
        }

        if (selectedCrop) {
            filtered = filtered.filter(farmer => farmer.crop === selectedCrop);
        }

        setFilteredData(filtered);
    };

    // Handle bid amount change
    const handleBidChange = (farmerId, e) => {
        const amount = e.target.value;
        setBidAmount((prevState) => ({ ...prevState, [farmerId]: amount }));
    };

    // Submit a bid for the selected farmer
    const handlePlaceBid = (farmerId) => {
        const bid = bidAmount[farmerId];
        const currentBid = farmerData.find(farmer => farmer._id === farmerId)?.currentBid;

        if (bid < currentBid) {
            toast.error('Bid amount should be greater than current bid');
            return;
        }
        
        if (bid && parseFloat(bid) > 0) {
            // Post the new bid to the API
            axios.post(`http://localhost:3000/api/farmerData/${farmerId}/placeBid`, {
                bid: parseFloat(bid)
            })
            .then(response => {
                toast.success('Bid placed successfully');
                handleSearch(); // Refresh data after placing bid
            })
            .catch(error => {
                toast.error('Failed to place bid');
                console.error(error);
            });
        } else {
            toast.error('Please enter a valid bid amount');
        }
    };

    // Utility to format dates for display
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <h2 className='h2-text'>Farmer <span style={{ color: "#fdba24" }}>Listing</span></h2>
            <div className="container-fluid mt-5">
                {/* Filters on a single row */}
                <div className="row mb-3 row-1">
                    <div className="col-md-3 text-center">
                        <label className='label' htmlFor="stateSelect">SELECT STATE :</label>
                        <select className="form-control" id="stateSelect" value={selectedState} onChange={handleStateChange}>
                            <option value="">All States</option>
                            {stateOptions.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-3 text-center">
                        <label className='label' htmlFor="districtSelect">SELECT DISTRICT</label>
                        <select className="form-control" id="districtSelect" value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedState}>
                            <option value="">All Districts</option>
                            {selectedState && districtData[selectedState]?.map((district, index) => (
                                <option key={index} value={district}>{district}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-3 text-center">
                        <label className='label' htmlFor="cropSelect">SELECT CROP:</label>
                        <select className="form-control" id="cropSelect" value={selectedCrop} onChange={handleCropChange}>
                            <option value="">All Crops</option>
                            {uniqueCrops.map((crop, index) => (
                                <option key={index} value={crop}>{crop}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="text-center container-fluid align-items-end">
                    <button className="btn" onClick={handleSearch}>Search</button>
                </div>

                {/* Table for filtered data */}
                <div>
                    {filteredData.length > 0 ? (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Farmer Name</th>
                                    <th>State</th>
                                    <th>District</th>
                                    <th>Crop</th>
                                    <th>Quality</th>
                                    <th>Variety</th>
                                    <th>Price / KG</th>
                                    <th>Harvest Date</th>
                                    <th>Quantity in KG</th>
                                    <th>Current Bid</th>
                                    <th>Bid End Time</th>
                                    <th>Bid Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((farmer) => (
                                    <tr key={farmer._id}>
                                        <td>{farmer.farmerName}</td>
                                        <td>{farmer.state}</td>
                                        <td>{farmer.district}</td>
                                        <td>{farmer.crop}</td>
                                        <td>{farmer.quality}</td>
                                        <td>{farmer.variety}</td>
                                        <td>{farmer.pricePerKG}</td>
                                        <td>{formatDate(farmer.harvestDate)}</td>
                                        <td>{farmer.quantityInKG}</td>
                                        <td>{farmer.currentBid || 'No bids'}</td>
                                        <td>{formatDate(farmer.bidEndTime)}</td>
                                        <td>
                                            <input 
                                                type="number" 
                                                className="form-control" 
                                                placeholder="Enter bid amount" 
                                                value={bidAmount[farmer._id] || ''} 
                                                onChange={(e) => handleBidChange(farmer._id, e)} 
                                            />
                                        </td>
                                        <td>
                                            <button className="btn-secondary" onClick={() => handlePlaceBid(farmer._id)}>
                                                BID
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="col-12 text-center">
                            <p>No data found</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
