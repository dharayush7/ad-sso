import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRouter from "./routes/user";

function init() {
  const app = express();
  const PORT = 8000;

  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.use("/user", userRouter);

  app.listen(PORT, () => {
    console.log(`Auth Server Satrted at PORT:${PORT}...`);
  });
}

init();
