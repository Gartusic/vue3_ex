/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gcrz9i3xx2s9odd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x13sqnlp",
    "name": "userName",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gcrz9i3xx2s9odd")

  // remove
  collection.schema.removeField("x13sqnlp")

  return dao.saveCollection(collection)
})
