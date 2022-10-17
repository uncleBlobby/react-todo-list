
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("test.db");


/*
db.serialize(() => {
    db.run('CREATE TABLE [IF NOT EXISTS] todos (UUID TEXT PRIMARY KEY, TITLE TEXT NOT NULL, DESCRIPTION TEXT, DUE_DATE TEXT, CREATED_AT TEXT NOT NULL')
})
*/
create = () => {
    db.run('CREATE TABLE IF NOT EXISTS todos(UUID TEXT PRIMARY KEY, title TEXT NOT NULL, DESCRIPTION TEXT, DUE_DATE TEXT, CREATED_AT TEXT NOT NULL)')
    console.log(`creating table if it does not exist`);
    //connection.commit()
}

add = (todo) => {
    console.log(`adding to db...`);
    //db.run(`INSERT INTO todos VALUES(?)`, [todo.title], function(err) {
    console.log(`todo: ${JSON.stringify(todo)}`)
    db.run(`INSERT INTO todos VALUES(?, ?, ?, ?, ?)`, [todo.UUID, todo.title, todo.description, todo.dueDate, todo.createdAt], function(err) {
        if (err) {
            return console.log(err.message);
        }

        console.log(`A row has been inserted.`);
    })
}

module.exports = { create, add };
