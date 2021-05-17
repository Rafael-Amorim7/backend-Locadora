import { Rent } from "../models/rentModel.js";


export const getRents = async (req, res) => {
    const rentsAll = await Rent.find({}).exec();
    return res.send(rentsAll)
}

export const createRent = async(req, res) => {
    const rent = req.body;

    rent.userId = req.params.userId;
    rent.filmId = req.params.filmId;
  
    await Rent.create(rent, (err, Rent) => {
      if (err) return res.send(err);
      if (Rent) return res.send(`A rent foi adicionado!`)
    })
}

export const getRent = async (req, res) => {
    const { id } = req.params
  
    await Rent.findById(id, (err, Rent) => {
      if (err) return res.send(err);
      return res.send(Rent);
    });
}

export const deleteRent = async (req, res) => {
    const { id } = req.params
  
    await Rent.findByIdAndDelete(id, (err, Rent) => {
      if (err) return res.send(err);
      if (Rent) return res.send(`A rent foi deletada`);
    })
  }

export const updateRent = async (req, res) => {
    const { price, dateLimit } = req.body
    const { id } = req.params
  
    await Rent.findByIdAndUpdate(id, { price, dateLimit }, (err, Rent) => {
      if (err) return res.send(err);
      else return res.send(`A rent foi atualisada`);
    }
  );
}

