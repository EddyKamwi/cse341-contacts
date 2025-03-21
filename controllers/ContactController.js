const contact = require("../modules/Contact");

const index = async (req, res) => {
  const bookList = await contact.findAll();
  res.json(bookList);
};

const show = async (req, res) => {
  const single_contact = await contact.findById(req.params.id);
  res.json(single_contact);
};

const create = async (req, res) => {
  const newContact = req.body;
  await contact
    .create(newContact)
    .then(() => res.status(200).json("The contact was created, congrats!"))
    .catch(() => res.status(500).json("could not create a contact"));
};

const destroy = async (req, res) => {
  try {
    await contact.delete(req.params.id);
    res.status(200).send("Contact was deleted!");
  } catch (error) {
    console.error(error);
    res.status(404).send("contact was not found");
  }
};

const update = async (req, res) => {
  await contact
    .update(req.params.id, req.body)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json(error));
};

module.exports = { index, show, create, destroy, update };
