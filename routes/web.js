const routes = require("express").Router();
const ContactsController = require("../controllers/ContactController");
// READ
routes.get("/", ContactsController.index);
routes.get("/:id", ContactsController.show);

// CREATE
routes.post("/", ContactsController.create);

// UPDATE
routes.put("/:id", ContactsController.update);

// DELETE
routes.delete("/:id", ContactsController.destroy);

module.exports = routes;
