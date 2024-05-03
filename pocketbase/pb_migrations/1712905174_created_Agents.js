/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kjd3l8ypo48h9is",
    "created": "2024-04-12 06:59:34.632Z",
    "updated": "2024-04-12 06:59:34.632Z",
    "name": "Agents",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nxulceea",
        "name": "Nom",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jnbfqqug",
        "name": "Prenom",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hrzniliy",
        "name": "Mail",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "up32ah81",
        "name": "Telephone",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kjd3l8ypo48h9is");

  return dao.deleteCollection(collection);
})
