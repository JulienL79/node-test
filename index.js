import express from 'express';
import 'dotenv/config'
import { moviesData } from './data/moviesData';

const app = express();
const PORT = process.env.PORT;

const movies = moviesData;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (request, response) => {
    response.send('Welcome to my API')
})

app.get('/movies', (request, response) => {
    response.json(moviesData);
})

app.get('/movie/:id', (req, res) => {
    let {id} = req.params
    try {
        const movieByID = movies.find((movie) => { movie.id === parseInt(id)})
        console.log(movieByID)
        if(!movieByID) {
            return res.status(400).json({message: 'Movie not found'})
        }
        return res.json(movieByID)
    }
    catch(err) {
        return res.status(500).json({message: 'Internal server error'})
    }
})

app.post('/movies', (req, res) => {
    let {title, genre} = req.body
    const newMovie = {
        id: movies.length + 1,
        name: title
    }
    moviesData.push(newMovie)
})

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))