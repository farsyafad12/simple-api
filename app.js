const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/welcome', (req, res) => {
    res.json({ message: 'Selamat, Project Anda Berhasil!' });
});


app.listen(port, () => {
    console.log(`Server Berjalan Pada http://localhost:${port}`);
    console.log(`Klik Link http://localhost:${port}/api/welcome Untuk Mengakses Halaman Welcome`);
});
