/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b7s69haqbtq9wjx")

  // remove
  collection.schema.removeField("essb2fph")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vko4hgfs",
    "name": "favoris",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b7s69haqbtq9wjx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "essb2fph",
    "name": "favoris",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "favoris"
      ]
    }
  }))

  // remove
  collection.schema.removeField("vko4hgfs")

  return dao.saveCollection(collection)
})
