import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { stateOptions, districtData } from './state-district'; // Assuming you have state-district mappings
import 'bootstrap/dist/css/bootstrap.min.css';
import './FarmerListing.css'; // Assuming a separate CSS file for styling
import toast  from 'react-hot-toast';

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
        if(bid < farmerData.find(farmer => farmer._id === farmerId).currentBid){
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
        <div className="container mt-5">
            <h2>Farmer Listing</h2>

            {/* Filters on a single row */}
            <div className="row mb-3">
                <div className="col-md-3">
                    <label htmlFor="stateSelect">Select State:</label>
                    <select className="form-control" id="stateSelect" value={selectedState} onChange={handleStateChange}>
                        <option value="">All States</option>
                        {stateOptions.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-3">
                    <label htmlFor="districtSelect">Select District:</label>
                    <select className="form-control" id="districtSelect" value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedState}>
                        <option value="">All Districts</option>
                        {selectedState && districtData[selectedState]?.map((district, index) => (
                            <option key={index} value={district}>{district}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-3">
                    <label htmlFor="cropSelect">Select Crop:</label>
                    <select className="form-control" id="cropSelect" value={selectedCrop} onChange={handleCropChange}>
                        <option value="">All Crops</option>
                        {uniqueCrops.map((crop, index) => (
                            <option key={index} value={crop}>{crop}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-3 d-flex align-items-end">
                    <button className="btn btn-primary w-100" onClick={handleSearch}>Search</button>
                </div>
            </div>

            {/* Cards for filtered data */}
            <div className="row">
                {filteredData.length > 0 ? (
                    filteredData.map((farmer) => (
                        <div key={farmer._id} className="col-md-4 mb-4">
                            <div className="card h-100 custom-card">
                                <div className="card-body">
                                    <h5 className="card-title">{farmer.farmerName}</h5>
                                    <p className="card-text"><strong>State:</strong> {farmer.state}</p>
                                    <p className="card-text"><strong>District:</strong> {farmer.district}</p>
                                    <p className="card-text"><strong>Crop:</strong> {farmer.crop}</p>
                                    <p className="card-text"><strong>Quality:</strong> {farmer.quality}</p>
                                    <p className="card-text"><strong>Variety:</strong> {farmer.variety}</p>
                                    <p className="card-text"><strong>Price / KG:</strong> {farmer.pricePerKG}</p>
                                    <p className="card-text"><strong>Harvest Date:</strong> {formatDate(farmer.harvestDate)}</p>
                                    <p className="card-text"><strong>Quantity in KG:</strong> {farmer.quantityInKG}</p>
                                    <p className="card-text"><strong>Current Bid:</strong> {farmer.currentBid ? farmer.currentBid : 'No bids'}</p>
                                    <p className="card-text"><strong>Bid End Time:</strong> {formatDate(farmer.bidEndTIme)}</p>
                                    <div className="input-group mt-3">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Enter bid amount" 
                                            value={bidAmount[farmer._id] || ''} 
                                            onChange={(e) => handleBidChange(farmer._id, e)} 
                                        />
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-success" onClick={() => handlePlaceBid(farmer._id)}>
                                        Place Bid
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No data found</p>
                    </div>
                )}
            </div>
        </div>
    );
}
