const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Contacts API",
      version: "1.0.0",
      description:
        "This API is interacting with a moogledb database collection of a list of contacts.",
    },
    servers: [
      { url: "http://localhost:8080" },
      { url: "https://cse341-contacts-8ldi.onrender.com" },
    ],
  },
  apis: ["./routes/web.js"],
};
module.exports = options;
