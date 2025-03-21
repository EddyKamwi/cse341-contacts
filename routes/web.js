const routes = require("express").Router();
const ContactsController = require("../controllers/ContactController");
/**
 * @swagger
 * tags:
 *  name: Contacts
 *  description: This is a contacts management API
 *
 * paths:
 *  /contacts:
 *      post:
 *          summary: create a new contact
 *          tags: [Contacts]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Contact'
 *          responses:
 *              200:
 *                  description: The contact was created, congrats!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Contact'
 *              500:
 *                  description: Server Error
 *
 * 
 *      get:
 *          summary: get all contacts
 *          tags: [Contacts]
 *          responses:
 *              200:
 *                  description: A list of all contacts.
 *                  contents:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Contact'
 *  /contacts/{id}:
 *      put:
 *          summary: update a contact by id
 *          tags: [Contacts]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: The contact id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Contact'
 *          responses:
 *              200:
 *                  description: contact was updated!
 *                  content:
 *                      application/json:
 *                          $ref: '#/components/schemas/Contact'
 *              404:
 *                  description: id did not match with any record
 *              500:
 *                  description: failed to connect to server
 *
 *
 *
 *      delete:
 *          summary: destroy a contact from the database
 *          tags: [Contacts]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description:
 *                  $ref: '#/components/schemas/Contact'
 *          responses:
 *              200:
 *                  description: Contact was deleted!
 *              404:
 *                  description: Contact not found
 *              500:
 *                  description: server error
 *
 *
 *      get:
 *          summary: get one contact by id
 *          tags: [Contacts]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: Use the contact id
 *          responses:
 *              200:
 *                  description: The Contact description by id
 *                  content:
 *                      application/json:
 *                          schema:
 *                             $ref: '#/components/schemas/Contact'
 * components:
 *  schemas:
 *      Contact:
 *          type: object
 *          required:
 *              - firstName
 *              - lastName
 *              - email
 *              - favoriteColor
 *              - birthday
 *          properties:
 *              firstName:
 *                  type: string
 *                  description: contact first name
 *              lastName:
 *                  type: string
 *                  description: contact last name
 *              email:
 *                  type: string
 *                  description: contact email address
 *              favoriteColor:
 *                  type: string
 *                  description: contact color in words e.g red, yellow, brown etc
 *              birthday:
 *                  type: string
 *                  description: birth date in this format dd/mm/yy i.e 08/10/93
 *          example:
 *              firstName: Joseph
 *              lastName: Smith
 *              email: josephsmith@gmail.com
 *              favoriteColor: black
 *              birthday: 23/12/1805
 *
 */

// READ
routes.get("/", ContactsController.index);
routes.get("/:id", ContactsController.show);

// CREATE
routes.post("/", ContactsController.create);

// UPDATE
routes.patch("/:id", ContactsController.update);

// DELETE
routes.delete("/:id", ContactsController.destroy);

module.exports = routes;
