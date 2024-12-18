import {Router} from 'express'
import { moviesData } from '../data/moviesData.js'

const movieRouter = Router()

movieRouter.get('/movies', (request, response) => {
    response.status(200).json(moviesData);
})

movieRouter.get('/movie/:id', (req, res) => {
    let {id} = req.params
    try {
        const movieByID = moviesData.find((movie) => movie.id === parseInt(id))
        if(!movieByID) {
            return res.status(400).json({message: 'Movie not found'})
        }
        return res.json(movieByID)
    }
    catch(err) {
        return res.status(500).json({message: 'Internal server error'})
    }
})

movieRouter.post('/movies', (req, res) => {
    let {title} = req.body
    try {
        if(!title) {
            return res.status(400).json({message: 'All fields are required'})
        }
        const newMovie = {
            id: moviesData.length + 1,
            title // = title : title
        }
        moviesData.push(newMovie)
    }
    catch (err) {
        return res.status(500).json({message: 'Internal server error'})
    }
    finally {
        return res.status(200).json({message: 'Movie added'});
    }
})

movieRouter.put('/movie/:id', (req, res) => {
    let {id} = req.params
    let {title} = req.body
    const movieByID = moviesData.find(movie => movie.id === parseInt(id))
    movieByID.title = title || movieByID.title
    console.log(movieByID)
    return res.status(201).json(movieByID)
})

movieRouter.delete('/movie/:id', (req, res) => {
    let {id} = req.params
    const movieByID = moviesData.find(movie => movie.id === parseInt(id))
    const index = moviesData.indexOf(movieByID)
    moviesData.splice(index, 1)
    return res.status(201).json({message: 'Movie has been deleted'})
})

export default movieRouter