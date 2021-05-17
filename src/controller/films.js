import { Film } from '../models/filmModel.js';


export const getFilms = async (req, res) => {
  const filmsAll = await Film.find({}).exec();
  return res.send(filmsAll)
}

export const createFilm = async(req, res) => {
  const film = req.body;

  await Film.create(film, (err, Film) => {
    if (err) return res.send(err);
    if (Film) return res.send(`O filme ${Film.name} foi adicionado!`)
  })
}

export const getFilm = async (req, res) => {
  const { id } = req.params

  await Film.findById(id, (err, Film) => {
    if (err) return res.send(err);
    return res.send(Film);
  });
}

export const deleteFilm = async (req, res) => {
  const { id } = req.params

  await Film.findByIdAndDelete(id, (err, Film) => {
    if (err) return res.send(err);
    if (Film) return res.send(`O filme ${Film.name} deletado`);
  })
}

export const updateFilm = async (req, res) => {
  const { name, quant, description } = req.body
  const { id } = req.params

  await Film.findByIdAndUpdate(id, { name: name, quant: quant, description: description }, (err, Film) => {
    if (err) return res.send(err);
    else return res.send(`O filme ${Film.name} foi atualizado`);
  }
);
}