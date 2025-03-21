async function main() {
  const express = require("express");
  const contactRouter = require("./routes/web");
  const swaggerUi = require("swagger-ui-express");
  const swaggerDoc = require("swagger-jsdoc");
  const options = require("./swagger-options");
  const specs = swaggerDoc(options);
  const app = express();

  // loading my routes
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
  app.use("/contacts", contactRouter);
  app.use(express.json());

  // starting server
  app.listen(8080, () => {
    console.log("server listening at port:" + 8080);
  });
}

main().catch((error) => {
  console.log(error);
});
