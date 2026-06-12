const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, ".env") });

const connectDB = require("./config/Database");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/assignments", require("./routes/assignmentRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

// Test Route
app.get("/", (req, res) => {
    res.send("Smart Student Learning & Placement Management API Running");
});

// Port
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server Running on Port ${PORT}`);
    });
};

startServer();
