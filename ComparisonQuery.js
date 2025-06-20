// Produk dengan harga > 30000
db.produk.find({ harga: { $gt: 30000 } })

// Produk dengan stok <= 10
db.produk.find({ stok: { $lte: 10 } })
