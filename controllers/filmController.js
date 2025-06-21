const Film = require('../models/Film');
// Validasi sederhana
const validateFilm = (data) => {
const { judul, deskripsi, kategori } = data;
if (!judul || !deskripsi || !kategori) {
return false;
}
return true;
};
// GET semua film
exports.getAllFilms = async (req, res) => {
const films = await Film.find();
res.json(films);
};
// POST tambah film
exports.createFilm = async (req, res) => {
if (!validateFilm(req.body)) {
return res.status(400).json({ message: 'Semua field harus diisi, kecuali gambar.' });
}
const newFilm = new Film(req.body);
const saved = await newFilm.save();
res.status(201).json(saved);
};
// PUT edit film
exports.updateFilm = async (req, res) => {
const { id } = req.params;
if (!validateFilm(req.body)) {
return res.status(400).json({ message: 'Semua field harus diisi, kecuali gambar.' });
}const updated = await Film.findByIdAndUpdate(id, req.body,
{ new: true });
res.json(updated);
};
// DELETE hapus film
exports.deleteFilm = async (req, res) => {
const { id } = req.params;
await Film.findByIdAndDelete(id);
res.json({ message: 'Film berhasil dihapus' });
};