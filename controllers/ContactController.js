const contact = require("../modules/Contact");

const index = async (req, res) => {
  const bookList = await contact.findAll();
  res.json(bookList);
};

const show = async (req, res) => {
  const single_contact = await contact.findById(req.params.id);
  if (single_contact === null) {
    res.status(404).json("contact not found!");
  }
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
const { ObjectId } = require('mongodb'); // Ensure ObjectId is imported

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Validate ID format
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid contact ID format" });
    }

    // Check for empty update data
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: "No update data provided" });
    }

    const modifiedCount = await Contact.update(id, updateData);

    // Check if document was found and updated
    if (modifiedCount === 0) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json({ message: "Contact updated successfully" });
  } catch (error) {
    // Handle specific MongoDB errors
    if (error instanceof BSON.Error) {
      return res.status(400).json({ error: "Invalid contact ID" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

// const update = async (req, res) => {
//   try {
//     await contact.update(req.params.id, req.body);
//     res.status(200).json(result);
//   } catch (error) {
//     res.json(error+"failed to update");
//   }
// };

module.exports = { index, show, create, destroy, update };
