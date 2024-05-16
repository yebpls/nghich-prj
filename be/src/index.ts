import express from "express";
import usersRouter from "./routers/users.routes";
import databaseService from "~/services/database.services";
import { defaultErrorHandler } from "./middlewares/errors.middlewares";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import YAML from "yaml";
// import fs from "fs";
// import path from "path";

// const file = fs.readFileSync(path.resolve("swagger.yaml"), "utf8");
const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Usera API",
      version: "1.0.0",
      description: "A simple API for users",
    },
  },
  apis: ["./swagger/*.yaml"],
};
const openapiSpecification = swaggerJsdoc(options);
// const swaggerDocument = YAML.parse(file);

const app = express();
const port = 8080;
databaseService.connect();

app.use(cors());

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use("/users", usersRouter);

app.use(defaultErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
