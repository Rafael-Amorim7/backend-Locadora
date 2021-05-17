import { User } from '../models/userModel.js'

export const getUsers = async (req, res) => {
  const usersAll = await User.find({}).exec();
  return res.send(usersAll)
}

export const createUser = async(req, res) => {
    const user = req.body;
  
    await User.create(user, (err, User) => {
      if (err) return res.send(err);
      if (User) return res.send(`O usuario ${User.name} foi adicionado!`)
    })
  
}

export const getUser = async (req, res) => {
    const { id } = req.params
  
    await User.findById(id, (err, User) => {
      if (err) return res.send(err);
      return res.send(User);
    });
}

export const deleteUser = async (req, res) => {
  const { id } = req.params

  await User.findByIdAndDelete(id, (err, User) => {
    if (err) return res.send(err);
    if (User) return res.send(`Usuario ${User.name} deletado`);
  })
}

export const updateUser = async (req, res) => {
    const { name, adress, cep, email } = req.body
    const { id } = req.params
  
    await User.findByIdAndUpdate(id, { name: name, adress: adress, cep: cep, email: email }, (err, User) => {
      if (err) return res.send(err);
      else return res.send(`O usuario ${User.name} foi atualizado`);
    }
  );
}