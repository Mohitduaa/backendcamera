const express = require('express');
const router = express.Router();

let cameras = [
  { id: 1, connected: false, recording: false },
  { id: 2, connected: false, recording: false },
];

router.get('/', (req, res) => {
  res.json(cameras);
});

router.post('/:id/connect', (req, res) => {
  const camera = cameras.find(cam => cam.id === parseInt(req.params.id));
  if (camera) {
    camera.connected = !camera.connected;
    res.json(camera);
  } else {
    res.status(404).json({ error: "Camera not found" });
  }
});

router.post('/:id/record', (req, res) => {
  const camera = cameras.find(cam => cam.id === parseInt(req.params.id));
  if (camera) {
    camera.recording = !camera.recording;
    res.json(camera);
  } else {
    res.status(404).json({ error: "Camera not found" });
  }
});

module.exports = router;
