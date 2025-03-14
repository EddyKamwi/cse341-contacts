const contact = require('../modules/Contact');

const index = async (req, res) => {
  const bookList = await contact.findAll();
  res.json(bookList);
};


const show = async (req, res) => {
  const single_contact = await contact.findById(req.params.id)
  res.json(single_contact);
};

module.exports = { index, show};
