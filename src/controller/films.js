import { v4 as id } from 'uuid'


var films = [];

export const getFilms = (req, res) => {
    res.send(films)
}

export const createFilm = (req, res) => {
    const film = req.body;
  
    films.push({ ...film, id: id()})
  
    res.send(`O filme ${film.name} foi adicionado!`)
}

export const getFilm = (req, res) => {
    const { id } = req.params
  
    const filmFind = films.find((film) => film.id === id)
  
    res.send(filmFind)
}

export const deleteFilm = (req, res) => {
  films = films.filter((film) => film.id !== req.params.id);
  
  res.send(`O filme com id ${req.params.id} foi deletado`);
}

export const updateFilm = (req, res) => {
    const { id } = req.params
    const { name, adress, cep, email } = req.body
  
    const film = films.find((film) => film.id === id)
  
    if (name)
      film.name = name
    if (adress)
      film.adress = adress
    if (cep)
      film.cep = cep
    if (email)
      film.email = email
  
    res.send(`Filme com id ${id} foi atualizado`)
}