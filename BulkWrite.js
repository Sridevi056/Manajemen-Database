db.produk.bulkWrite([
  { insertOne: { document: { nama: "Lidah Mertua", harga: 30000, stok: 15 } } },
  { updateOne: { filter: { nama: "Monstera" }, update: { $set: { stok: 10 } } } },
  { deleteOne: { filter: { nama: "Kaktus Mini" } } }
])
