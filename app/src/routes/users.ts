import express from "express";
import { Users } from "../db/users";

const router = express.Router();

router.get("/all", function (req, res) {
  Users.findAll()
    .then((persons) => {
      res.status(200).send(JSON.stringify(persons));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.get("/:id", function (req, res) {
  Users.findByPk(req.params.id)
    .then((person) => {
      res.status(200).send(JSON.stringify(person));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.put("/", function (req, res) {
  Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    id: req.body.id,
  })
    .then((person) => {
      res.status(200).send(JSON.stringify(person));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

router.delete("/:id", function (req, res) {
  Users.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    });
});

export default router;
