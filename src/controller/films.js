import { v4 as id } from 'uuid'


var films = [];

export const getFilms = (req, res) => {
    res.send(films)
}

export const createFilm = (req, res) => {
    const film = req.body;
  
    films.push({ ...film, filmId: id()})
  
    res.send(`O filme ${film.name} foi adicionado!`)
}

export const getFilm = (req, res) => {
  const { id } = req.params

  const filmFind = films.find((film) => film.filmId === id)

  res.send(filmFind)
}

export const deleteFilm = (req, res) => {
  films = films.filter((film) => film.filmId !== req.params.id);
  
  res.send(`O filme com id ${req.params.id} foi deletado`);
}

export const updateFilm = (req, res) => {
    const { name, quant, description } = req.body
  
    const film = films.find((film) => film.filmId === req.params.id)
  
    if (name)
      film.name = name
    if (quant)
      film.quant = quant
    if (description)
      film.description = description
  
    res.send(`Filme com id ${req.params.id} foi atualizado`)
}