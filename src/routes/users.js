import express from 'express'
import { v4 as id } from uuid

users = [];

const router =  express.Router();

router.get("/", (req, res) => {
  res.send(users)
})

router.post("/", (req,) => {
  const user = req.body;

  users.push({ ...user, id: id()})

  res.send(`O usuario ${user.name} foi adicionado!`)
})

export default router;