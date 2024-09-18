import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function AddCrop({ onCropAdded }) {
    const [farmerName, setFarmerName] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [crop, setCrop] = useState('');
    const [quality, setQuality] = useState('');
    const [variety, setVariety] = useState('');
    const [pricePerKG, setPricePerKG] = useState('');
    const [harvestDate, setHarvestDate] = useState('');
    const [quantityInKG, setQuantityInKG] = useState('');
    const [bidEndTime, setBidEndTime] = useState('');
    const [loading, setLoading] = useState(false);
    const [cropAdded, setCropAdded] = useState(false);

    const handleSubmit = () => {
        if (!farmerName || !state || !district || !crop || !quality || !variety || !pricePerKG || !harvestDate || !quantityInKG || !bidEndTime) {
            toast.error('All fields are required');
            return;
        }

        const cropData = {
            farmerName,
            state,
            district,
            crop,
            quality,
            variety,
            pricePerKG,
            harvestDate: new Date(harvestDate).toISOString(),
            quantityInKG,
            currentBid: null,
            bidEndTIme: new Date(bidEndTime).toISOString(),
            bids: []
        };

        setLoading(true);
        axios.post('http://localhost:3000/api/farmerData/', cropData)
            .then(response => {
                toast.success('Crop added successfully');
                setCropAdded(true);
                setLoading(false);
            })
            .catch(error => {
                toast.error('Failed to add crop');
                console.error('Error adding crop:', error);
                setLoading(false);
            });
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title mb-4">Add New Crop</h2>
                    
                    {!cropAdded ? (
                        <>
                            <div className="form-group">
                                <label htmlFor="farmerName">Farmer Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="farmerName"
                                    value={farmerName}
                                    onChange={(e) => setFarmerName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="district">District</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="district"
                                    value={district}
                                    onChange={(e) => setDistrict(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="crop">Crop</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="crop"
                                    value={crop}
                                    onChange={(e) => setCrop(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="quality">Quality</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="quality"
                                    value={quality}
                                    onChange={(e) => setQuality(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="variety">Variety</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="variety"
                                    value={variety}
                                    onChange={(e) => setVariety(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="pricePerKG">Price per KG</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="pricePerKG"
                                    value={pricePerKG}
                                    onChange={(e) => setPricePerKG(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="harvestDate">Harvest Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="harvestDate"
                                    value={harvestDate}
                                    onChange={(e) => setHarvestDate(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="quantityInKG">Quantity in KG</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantityInKG"
                                    value={quantityInKG}
                                    onChange={(e) => setQuantityInKG(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bidEndTime">Bid End Time</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="bidEndTime"
                                    value={bidEndTime}
                                    onChange={(e) => setBidEndTime(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                className={`btn btn-primary mt-4 ${loading && 'disabled'}`}
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? 'Adding Crop...' : 'Add Crop'}
                            </button>
                        </>
                    ) : (
                        <div className="mt-4">
                            <p className="text-success">Crop added successfully!</p>
                            <button
                                className="btn btn-secondary"
                                onClick={() => window.location.href = '/farmer-listing'}
                            >
                                Check Crop List
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
