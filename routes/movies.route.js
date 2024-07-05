import express from 'express';
import {
    movieIndex,
    movieCreate,
    movieUpdate,
    movieDelete,
    getMovieByID
} from "../controller/movies.controller.js";

const router = express.Router()


// CRUD functionality of movies

// R - for reading

router.get('/', movieIndex)

// C -for creating

router.post('/', movieCreate)

// U - for updating

router.put('/:id', movieUpdate)

// D - for deleting

router.delete('/:id', movieDelete)

// G - for getting record by id

router.get('/:id', getMovieByID)

export default router;