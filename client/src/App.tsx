import { useState } from 'react'
import './App.css'

import { AddTodoModal } from './components/AddTodoModal'

import { returnDayName, returnMonthName, returnDate } from './util/Dates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='current-date-display'>
        <>
        {returnDayName()}, {returnMonthName()} {returnDate()}
        </>
      </div>
      <div className='add-todo-button'>
        Add Todo
        <AddTodoModal />
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
