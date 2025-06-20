// Produk harga > 30000 DAN stok > 10
db.produk.find({ $and: [ { harga: { $gt: 30000 } }, { stok: { $gt: 10 } } ] })

// Produk harga < 20000 ATAU stok < 5
db.produk.find({ $or: [ { harga: { $lt: 20000 } }, { stok: { $lt: 5 } } ] })
