import { v4 as id } from uuid


var users = [];

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body;
  
    users.push({ ...user, id: id()})
  
    res.send(`O usuario ${user.name} foi adicionado!`)
}

export const getUser = (req, res) => {
    const { id } = req.params
  
    const userFind = users.find((user) => user.id === id)
  
    res.send(userFind)
}

export const deleteUser = (req, res) => {
    const { id } = req.params
  
    users = users.filter((user) => user.id !== id);
}

export const updateUser = (req, res) => {
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
}