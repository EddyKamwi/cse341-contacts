const contact = require("../modules/Contact");

const index = async (req, res) => {
  const list = await contact.findAll();
  if (list === null) {
    res.status(404).json("No contact not found!");
  } else {
    res.status(200).json(list);
  }
};

const show = async (req, res) => {
  const single_contact = await contact.findById(req.params.id);
  if (single_contact === null) {
    res.status(404).json("contact not found!");
  } else {
    res.status(200).json(single_contact);
  }
};

const create = async (req, res) => {
  const newContact = req.body;
  await contact
    .create(newContact)
    .then(() => res.status(200).json("The contact was created, congrats!"))
    .catch(() => res.status(500).json("Server Error"));
};

const destroy = async (req, res) => {
  try {
    const num = await contact.delete(req.params.id);
    if (num === 1) {
      res.status(200).send("Contact was deleted!");
    } else {
      res.status(404).send("Contact was not found!");
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

const update = async (req, res) => {
  try {
    const num = await contact.update(req.params.id, req.body);
    if (num === 1) {
      res.status(200).json("contact was updated!");
    } else {
      res.status(404).json("id did not match with any record");
    }
  } catch (error) {
    res.json("failed to connect to server");
  }
};

module.exports = { index, show, create, destroy, update };
