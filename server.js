async function main() {
  const express = require("express");
  const app = express();

  // loading my routes
  app.use("/", require("./routes/web"));

  // starting server
  app.listen(8080, () => {
    console.log("server listening at port:" + 8080);
  });
}

main().catch((error) => {
  console.log(error);
});
