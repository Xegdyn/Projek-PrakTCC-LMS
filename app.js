// Mengimport package
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3200; // Sesuaikan port jika diperlukan
const bukuRouter = require("./buku");

// Supaya API dapat diakses di domain yang berbeda
app.use(cors());

// Buat ngubah request body yang berupa json ke dalam object
app.use(express.json());

app.use("/buku", bukuRouter);

app.get("/", (req, res) => {
  res.send("Hello from buku-service! 📚");
});

// Menjalankan server di port 3200
app.listen(port, () => console.log("Server terkoneksi pada port " + port));
