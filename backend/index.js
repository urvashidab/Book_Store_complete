import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}`),
);
