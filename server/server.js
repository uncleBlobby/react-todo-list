const express = require('express');
const cors = require('cors');

const app = express();
const port = 5174;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log(`received request: ${JSON.stringify(req.headers)}`)
    res.send('Hello, World!')
})

app.get('/login', (req, res) => {
    res.send('Received Login Request.');
})

app.get('/users/:userId/todos', (req, res) => {
    res.send(req.params);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})