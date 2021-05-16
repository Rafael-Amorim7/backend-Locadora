import { Rent } from "../models/rentModel.js";


export const getRents = (req, res) => {
    res.send(rents)
}

export const createRent = (req, res) => {
    const rent = req.body;

    rent.userId = req.params.userId;
    rent.filmId = req.params.filmId;

    rents.push({...rent, rentId: id()})

    res.send(`O filme ${rent.filmId} foi alugado pelo(a) ${rent.userId}`)
}

export const getRent = (req,res) => {
    const rentFind = rents.find((rent) => rent.rentId === req.params.id)
  
    res.send(rentFind)
}

export const deleteRent = (req, res) => {
    rents = rents.filter((rent) => rent.rentId !== req.params.id);
  
    res.send(`Rent deletada`);
}

export const updateRent = (req, res) => {
    const { price, date } = req.body
  
    const rent = rents.find((rent) => rent.rentId === req.params.id)
  
    if (price)
      rent.price = price
    if (date)
      rent.date = date
  
    res.send(`Rent  atualizada`)
}
