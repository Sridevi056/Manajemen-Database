db.createCollection("produkValidasi", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "nama", "harga", "stok" ],
      properties: {
        nama: { bsonType: "string" },
        harga: { bsonType: "int", minimum: 0 },
        stok: { bsonType: "int", minimum: 0 }
      }
    }
  }
})
