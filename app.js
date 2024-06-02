const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080; // Use PORT environment variable

const bukuRouter = require("./buku");

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

app.use("/buku", bukuRouter);

app.get("/", (req, res) => {
  res.send("Hello from buku-service! 📚");
});

// Listen on the port specified by the PORT environment variable
app.listen(port, () => console.log("Server is running on port " + port));
