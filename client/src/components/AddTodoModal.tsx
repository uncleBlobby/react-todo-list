import axios from "axios";
import { useState } from "react"
import { UUIDGenerator } from "../util/UUID";


export const AddTodoModal = ({ todoList, updateTodos }: any) => {
    const [titleInput, setTitleInput] = useState("");
    const [descInput, setDescInput] = useState("");
    const [dateInput, setDateInput] = useState("");
    const [UUID, setUUID] = useState("");
    
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
            createdAt: "",
            UUID: "",
        };
        newTodo.title = titleInput;
        newTodo.description = descInput;
        newTodo.dueDate = dateInput;
        newTodo.createdAt = Date();
        newTodo.UUID = UUIDGenerator();
        setUUID(newTodo.UUID);

        console.log(newTodo);
        return newTodo;
    }

    const clearInputs = () => {

        setTitleInput('');
        setDescInput('');
        setDateInput('');
    }

    const commitAndSubmitTodo = () => {
        if(titleInput != ""){
            let todo = makeTodoObject();
            clearInputs();
            updateTodos(
                [...todoList, todo]
            );
        } else {
            alert("Title cannot be empty.")
        }
    }

    const cancelTodoButton = (event: any) => {
        clearInputs();
        hideAddTodoModal(event);
    }

    const hideAddTodoModal = (event: any) => {
        console.log(`hiding todo modal`);
        let modal = document.getElementById('addTodoModal');

        console.log(modal);

        if (modal != null){
            modal.style.display = "none";
        }

        console.log(`modal.style.display: ${modal?.style.display}`)
        event?.stopPropagation();
    }

    const sendTodo = () => {
        let todo = makeTodoObject();
        axios({
            method: 'post',
            url: 'http://localhost:5174/users/uncleBlobby/todos',
            data: {
                todo: todo
            }
        });
    }



    return (
        <div id='addTodoModal' className='add-todo-modal'>
          /Modal/
          <br></br>
          Todo: 
            <input 
                onChange={(e) => titleInputListener(e)} 
                placeholder='title'
                value={titleInput}
                />
          <br></br>
          Description:  
            <input 
                onChange={(e) => descInputListener(e)} 
                placeholder='description'
                value={descInput}
                />
          <br></br>
          Due Date:
            <input 
                onChange={(e) => dateInputListener(e)} 
                type="date"
                value={dateInput}
                />
          <div 
            onClick={() => commitAndSubmitTodo()} 
            className='commit-todo-button'>
            Add Todo
          </div>
          <div 
            className='cancel-todo-button'
            onClick={(e) => cancelTodoButton(e)}>
            Cancel
          </div>
          <button onClick={() => sendTodo()}>Send Todo over Wire</button>
        </div>
    )
}