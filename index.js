import express from "express";
import dotenv from "dotenv";
import routes from "./api/routes.js";
import { log } from "./utils/logger.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  log(`Scalar AI running on port ${PORT}`);
});
