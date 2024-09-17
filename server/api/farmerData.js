
const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer');

// Get all farmer data
router.get('/', async (req, res) => {
    try {
        const farmerData = await Farmer.find();
        res.json(farmerData);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

// Get farmer data by ID
router.get('/:id', async (req, res) => {
    try {
        const farmerData = await Farmer.findById(req.params.id);
        if (!farmerData) {
            return res.status(404).json({ message: 'Farmer not found' });
        }
        res.json(farmerData);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

// Create new farmer data
router.post('/', async (req, res) => {
    try {
        const farmerData = new Farmer(req.body);
        await farmerData.save();
        res.json(farmerData);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

// Update farmer data by ID
router.put('/:id', async (req, res) => {
    try {
        const farmerData = await Farmer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!farmerData) {
            return res.status(404).json({ message: 'Farmer not found' });
        }
        res.json(farmerData);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

router.post('/:id/placeBid', async (req, res) => {
    try {
        const farmerData = await Farmer.findById(req.params.id);
        
        // Check if farmer exists
        if (!farmerData) {
            return res.status(404).json({ message: 'Farmer not found' });
        }

        // Validate the bid
        const bid = parseFloat(req.body.bid);
        if (!bid || bid <= 0) {
            return res.status(400).json({ message: 'Invalid bid amount' });
        }

        // Ensure bids array exists before pushing the new bid
        if (!farmerData.bids) {
            farmerData.bids = [];
        }

        // Add the new bid to the bids array and update the current bid
        farmerData.bids.push({ amount: bid });
        farmerData.currentBid = bid;

        // Save the updated farmer data
        await farmerData.save();
        
        return res.json(farmerData);
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error placing bid:', error);
        return res.status(500).json({ message: 'Server Error', error });
    }
});


module.exports = router;