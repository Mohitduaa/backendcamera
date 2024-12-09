const express = require('express');
const router = express.Router();

// Mock motion detection data
router.get('/status', (req, res) => {
  res.json({
    breaches: 7,
    vehiclesDetected: ['Motorbikes', 'Cars', 'Trucks', 'Pedestrians'],
  });
});

module.exports = router;
