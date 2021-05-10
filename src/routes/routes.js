import express from 'express'
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controller/users.js'
import { getFilms, createFilm, getFilm, deleteFilm, updateFilm } from '../controller/films.js'
import { getRents, createRent, getRent, deleteRent, updateRent } from '../controller/rents.js'


const router =  express.Router();

//user routes
router.get("/users", getUsers)
router.post("/users", createUser)
router.get("/users/:id", getUser)
router.delete("/users/:id", deleteUser)
router.patch("/users/:id", updateUser)


//film routes
router.get("/films", getFilms)
router.post("/films", createFilm)
router.get("/films/:id", getFilm)
router.delete("/films/:id", deleteFilm)
router.patch("/films/:id", updateFilm)

//rent routes
router.get("/rents", getRents)
router.post("/rents/:userId/:filmId", createRent)
router.get("/rents/:id", getRent)
router.delete("/rents/:id", deleteRent)
router.patch("/rents/:id", updateRent)

export default router;