import express from "express";
import movieRoutes from "./routes/movies.route.js"

const app = express();
const PORT = 6969;

// Data understanding middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.json({msg: "Hello world"});
})

app.use('/movies', movieRoutes)


app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`)
})


