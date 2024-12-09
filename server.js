const express = require('express');
const app = express();
const cors = require('cors');
const cameraRoutes = require('./routes/camera');
const motionRoutes = require('./routes/motion');

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/camera', cameraRoutes);
app.use('/api/motion', motionRoutes);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
