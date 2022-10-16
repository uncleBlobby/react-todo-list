import { useState } from 'react'
import './App.css'

import { AddTodoModal } from './components/AddTodoModal'
import { TodoListItem } from './components/TodoListItem'

import { returnDayName, returnMonthName, returnDate } from './util/Dates'

function App() {
  const [count, setCount] = useState(0)

  const [todoList, setTodoList] = useState<any>([]);

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
        let newArray = todoList;
        newArray.splice(i, 1);
        setTodoList(...todoList, newArray)

      }
      
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
        <>
      {todoList.map((todo: { title: string, description: string, dueDate: string, UUID: string}, index: number) => {
        return(
          <TodoListItem deleteTodoByID={deleteTodoByID} title={todo.title} description={todo.description} date={todo.dueDate} key={todo.UUID} UUID={todo.UUID}/>
        )
        
      })}
        
        </>

      </div>
    </div>
  )
}

export default App
