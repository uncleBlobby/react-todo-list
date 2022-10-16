import { useState } from 'react'
import './App.css'

import { AddTodoModal } from './components/AddTodoModal'

import { returnDayName, returnMonthName, returnDate } from './util/Dates'

function App() {
  const [count, setCount] = useState(0)

  const [todoList, setTodoList] = useState([{}]);

  const showTodoModal = () => {
    let modal = document.getElementById("addTodoModal");
    console.log(`displaying modal`);

    if (modal != null) {
      modal.style.display = "block";
    }
  }

  return (
    <div className="App">
      <div className='current-date-display'>
        <>
        {returnDayName()}, {returnMonthName()} {returnDate()}
        </>
      </div>
      <div onClick={() => showTodoModal()} className='add-todo-button'>
        Add Todo
        <AddTodoModal todoList={todoList} updateTodos={setTodoList}/>
      </div>

      <div className='todo-list-container'>
        <div className='todo-item'>
          <div className='todo-header'>
            Todo Header
          </div>
          <div className='todo-description'>
            Todo Description
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
