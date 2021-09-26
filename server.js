const express = require("express");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");
const app = express();
const cors = require("cors");
connectDB();
app.use(cors());
app.use(express.json({ extended: false }));

// Add swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));

// Test Api
app.get("/", (req, res) => res.send("API Running"));

//Define PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server is running on Port " + PORT));
