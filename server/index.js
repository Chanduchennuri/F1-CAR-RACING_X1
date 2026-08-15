const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

app.use("/api/auth", authRoutes);

// Express error handler
app.use((err, req, res, next) => {
    console.error('Express error:', err);
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
