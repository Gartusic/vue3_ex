/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gcrz9i3xx2s9odd")

  collection.indexes = []

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gcrz9i3xx2s9odd")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_tPIzncW` ON `posts` (`postNo`)"
  ]

  return dao.saveCollection(collection)
})
