require('dotenv').config()
const PORT = process.env.PORT || 4000;

const express = require('express');
const usersRoutes = require('./routes/user');
const restaurantRoutes = require('./routes/restaurant');
const log = require('./middleware/log');

const app = express();

app.use(log);
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/restaurants', restaurantRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
});

// Database
const { Storage } = require('@google-cloud/storage');
const mysql = require('mysql');
const schedule = require('node-schedule');

// Inisialisasi klien Google Cloud Storage
const storage = new Storage();

function send_message() {
    // Mengakses Google Cloud Storage
    const bucket = storage.bucket('findfud_bucket');
    const blob = bucket.file('RekomendasiAkhir.json');

    // Mengambil data JSON dari bucket
    blob.download(function (err, contents) {
        if (!err) {
            const json_data = contents.toString();

            // Menghubungkan ke MySQL
            const connection = mysql.createConnection({
                host: '34.101.51.65',
                user: 'root',
                password: 'findfud123',
                database: 'findfud_db'
            });

            // Menghapus data lama sebelum memasukkan data baru
            connection.query('TRUNCATE TABLE tbl_namaresto', function (error) {
                if (error) {
                    console.error('Error deleting old data:', error);
                    connection.end();
                    return;
                }

                // Memasukkan data JSON ke MySQL
                const data = JSON.parse(json_data);

                for (const item of data) {
                    // Lakukan transformasi data jika diperlukan
                    // Misalnya, akses nilai tertentu dalam item dan ubah formatnya

                    // Contoh perintah INSERT
                    const sql = 'INSERT INTO tbl_namaresto (nama_resto, nama_makanan) VALUES (?, ?)';
                    const values = [item.Nama_resto, item.Nama_makanan];

                    connection.query(sql, values, function (error) {
                        if (error) {
                            console.error('Error inserting data:', error);
                        }
                    });
                }

                // Tutup koneksi
                connection.end();
            });
        } else {
            console.error('Error downloading JSON:', err);
        }
    });
}

// Jadwalkan eksekusi fungsi setiap 1 menit
schedule.scheduleJob('* */1 * * *', send_message);
