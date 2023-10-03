import express from "express";
import uuid from "uuid";

const app = express();

const pets = [
  {
    id: 1,
    name: "luna",
    type: "cat",
  },
];

app.get("/pets", (req, res) => {
  return res.json(pets);
});

app.get("/pets/:id", (req, res) => {
  return res.json(pets.find(({ id }) => id === +req.params.id));
});

app.listen(9595, () => {
  console.log(`Server is up & running on ${"http://localhost:9595"}`);
});
