import { useState } from 'react'
import './App.css'

import { AddTodoModal } from './components/AddTodoModal'
import { TodoListItem } from './components/TodoListItem'

import { returnDayName, returnMonthName, returnDate } from './util/Dates'

function App() {
  const [count, setCount] = useState(0)

  const [todoList, setTodoList] = useState([]);

  const showTodoModal = () => {
    let modal = document.getElementById("addTodoModal");
    console.log(`displaying modal`);

    if (modal != null) {
      modal.style.display = "block";
    }
    console.log(todoList);
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
        <>
      {todoList.map((todo: { title: string, description: string, dueDate: string; }, index: number) => {
        return(
          <TodoListItem todoList={todoList} title={todo.title} description={todo.description} date={todo.dueDate} key={index}/>
        )
        
      })}
        
        </>

      </div>
    </div>
  )
}

export default App
