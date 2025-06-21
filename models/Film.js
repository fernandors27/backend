const mongoose = require('mongoose');
const filmSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
    kategori: {
        type: String,
        required: true,
    },
    gambar: {
        type: String
    },
}, { timestamps: true });
module.exports = mongoose.model('Film', filmSchema);