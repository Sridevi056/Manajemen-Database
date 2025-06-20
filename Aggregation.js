// Rata-rata harga produk
db.produk.aggregate([
  { $group: { _id: null, rataHarga: { $avg: "$harga" } } }
])
