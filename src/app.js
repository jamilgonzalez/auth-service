const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const controller = require("./Controllers");
const express = require("express");
const makeExpressCallback = require("./ExpressCallback");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT ?? 4300;
app.use(express.json());
app.use(awsServerlessExpressMiddleware.eventContext());

app.post("/register", makeExpressCallback(controller.register));
app.post("/login", makeExpressCallback(controller.login));
app.post("/delete", makeExpressCallback(controller.deleteUser));
app.post("/logout", makeExpressCallback(controller.logout));
app.get("/verify/:token", makeExpressCallback(controller.verify));
app.get("/health", makeExpressCallback(controller.health));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

module.exports = app;
