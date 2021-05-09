import express from 'express'
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controller/users.js'
import { getFilms, createFilm, getFilm, deleteFilm, updateFilm } from '../controller/films.js'


const router =  express.Router();

//user routes
router.get("/users", getUsers)
router.post("/users/", createUser)
router.get("/users/:id", getUser)
router.delete("/users/:id", deleteUser)
router.patch("/users/:id", updateUser)


//film routes
router.get("/films/", getFilms)
router.post("/films/", createFilm)
router.get("/films/:idFilm", getFilm)
router.delete("/films/:idFilm", deleteFilm)
router.patch("/films/:idFilm", updateFilm)

export default router;