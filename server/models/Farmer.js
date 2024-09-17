const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});

const farmerDataSchema = new mongoose.Schema({
    farmerName: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    crop: {
        type: String,
        required: true
    },
    quality: {
        type: String,
        required: true
    },
    variety: {
        type: String,
        required: true
    },
    pricePerKG: {
        type: Number,
        required: true
    },
    harvestDate: {
        type: Date,
        required: true
    },
    quantityInKG: {
        type: Number,
        required: true
    },
    currentBid: {
        type: Number,
        default: null // Initially no bid
    },
    bidEndTIme: {
        type: Date,
        required: true
    },
    bids: [bidSchema], // Array of bids
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const FarmerData = mongoose.model('FarmerData', farmerDataSchema);

module.exports = FarmerData;
