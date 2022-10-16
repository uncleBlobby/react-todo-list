import { useState } from "react"


export const AddTodoModal = () => {
    const [titleInput, setTitleInput] = useState("");
    const [descInput, setDescInput] = useState("");
    const [dateInput, setDateInput] = useState("");
    
    const titleInputListener = (event: any) => {
        console.log(`todo title: ${event.target.value}`)
        setTitleInput(event.target.value);
        //console.log(`todo state: ${titleInput}`)
    }
    
    const descInputListener = (event: any) => {
        console.log(`todo desc: ${event.target.value}`)
        setDescInput(event.target.value);
        //console.log(`todo state: ${descInput}`)
    }

    const dateInputListener = (event: any) => {
        console.log(`todo due date: ${event.target.value}`)
        setDateInput(event.target.value);

    }
    
    const makeTodoObject = () => {
        let newTodo = {
            title: "",
            description: "",
            dueDate: "",
        };
        newTodo.title = titleInput;
        newTodo.description = descInput;
        newTodo.dueDate = dateInput;

        console.log(newTodo);

    }

    return (
        <div className='add-todo-modal'>
          /Modal/
          <br></br>
          Todo:<input onChange={(e) => titleInputListener(e)} placeholder='title'></input>
          <br></br>
          Description:<input onChange={(e) => descInputListener(e)} placeholder='description'></input>
          <br></br>
          Due Date:<input onChange={(e) => dateInputListener(e)} type="date" placeholder='due date'></input>
          <div onClick={() => makeTodoObject()} className='commit-todo-button'>Add Todo</div>
        </div>
    )
}