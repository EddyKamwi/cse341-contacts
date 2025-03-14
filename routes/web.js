const routes = require("express").Router();
const ContactsController = require("../controllers/ContactController");

routes.get(["/","/contacts"], ContactsController.index);
routes.get("/contacts/:id", ContactsController.show);

module.exports = routes;
