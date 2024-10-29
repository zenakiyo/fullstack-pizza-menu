import express from 'express';
import pizzaData from './data.json' with {type: "json"}

const app = express();

app.get('/', (req, res) => {
    res.send("Home")
});
app.get('/api/pizza-data', (req, res) => {
    res.send(pizzaData)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at ${port}`)
})