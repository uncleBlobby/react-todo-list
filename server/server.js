const express = require('express');
const cors = require('cors');

const app = express();
const port = 5174;

app.use(cors());
app.use(express.json());

const db = require('./db')

const users = [];

app.get('/', (req, res) => {
    console.log(`received request: ${JSON.stringify(req.headers)}`)
    res.json('Hello, World!')
})

app.get('/login', (req, res) => {
    res.send('Received Login Request.');
})

app.get('/users/:userId/todos', (req, res) => {
    res.send(req.params);
})

app.post('/users/:userID/todos', (req, res) => {
    console.log(`request params: ${JSON.stringify(req.params)}`)
    const user = req.params.userID;
    if (!users.includes(user)){
        users.push(user);
        console.log(`added new user: ${user}`)
        console.log(`users: ${users}`)
    }
    console.log(`received post request at '/users/${user}/todos'`)
    console.log(`new todo ${JSON.stringify(req.body.todo)}`)

    db.create();
    db.add(req.body.todo);
    
    //console.log(res.data);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

/*
class Todo {
    constructor(title, description, dueDate, UUID);
    title = this.title;
    description = this.description;
    dueDate = this.dueDate;
    UUID = this.UUID;
}
*/
