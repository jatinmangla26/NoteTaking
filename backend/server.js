const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const app = express();
const conn = require("../backend/config/db");
const userRouters = require("../backend/routes/UserRoutes");
const PORT = process.env.PORT || 5000;
let cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api/users", userRouters);

app.listen(PORT, console.log(`Server Started on Port ${PORT}`));
