import { useState } from 'react'
import './App.css'

import { AddTodoModal } from './components/AddTodoModal'
import { TodoListContainer } from './components/TodoListContainer'
import { returnDayName, returnMonthName, returnDate } from './util/Dates'

const SERVER = "http://localhost:5174"

function App() {
  const [count, setCount] = useState(0)

  const [todoList, setTodoList] = useState<any>([]);

  const [haveUpdated, setHaveUpdated] = useState<any>(true);

  const showTodoModal = () => {
    let modal = document.getElementById("addTodoModal");
    console.log(`displaying modal`);

    if (modal != null) {
      modal.style.display = "block";
    }
    console.log(todoList);
  }

  const deleteTodoByID = (target: string) => {
    console.log(`deleting todo: ${target}`)
    for (let i = 0; i < todoList.length; i++){
      if (todoList[i].UUID == target){
        console.log(`found target todo`);
        console.log(`todoList before deletion: ${todoList}`)
        let newArray = todoList;
        newArray.splice(i, 1);
        setTodoList(newArray)
        console.log(`todoList after deletion: ${todoList}`)
        setHaveUpdated(false);
      }
      
    }
  }

  const sendPing = () => {
    console.log(`pinging server...`)
    fetch(SERVER + "/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="App">
      <button onClick={() => sendPing()}>Ping Server</button>
      <div className='current-date-display'>
        <>
        {returnDayName()}, {returnMonthName()} {returnDate()}
        </>
      </div>
      <div onClick={() => showTodoModal()} className='add-todo-button'>
        Add Todo
        <AddTodoModal todoList={todoList} updateTodos={setTodoList}/>
      </div>

      <TodoListContainer deleteTodoByID={deleteTodoByID} todoList={todoList} haveUpdated={haveUpdated} setHaveUpdated={setHaveUpdated} />

      
    </div>
  )
}

export default App
