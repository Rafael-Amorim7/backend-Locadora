import express from 'express'
import { v4 as id } from uuid

var users = [];

const router =  express.Router();

router.get("/", (req, res) => {
  res.send(users)
})

router.post("/", (req,) => {
  const user = req.body;

  users.push({ ...user, id: id()})

  res.send(`O usuario ${user.name} foi adicionado!`)
})

router.get("/:id", (req, res) => {
  const { id } = req.params

  const userFind = users.find((user) => user.id === id)

  res.send(userFind)
})

router.delete("/:id", (req, res) => {
  const { id } = req.params

  users = users.filter((user) => user.id !== id);
})

router.patch("/:id", (req, res) => {
  const { id } = req.params
  const { name, adress, cep, email } = req.body

  const user = users.find((user) => user.id === id)

  if (name)
    user.name = name
  if (adress)
    user.adress = adress
  if (cep)
    user.cep = cep
  if (email)
    user.email = email

  res.send(`User com id ${id} foi atualizado`)
})

export default router;