import { useEffect, useState } from "react";
import { TodoList } from "./TodoList"

export const TodoListContainer = ({ todoList, deleteTodoByID, haveUpdated, setHaveUpdated }: any) => {

    const [oldTodoList, setNewTodoList] = useState(todoList);
    //@ts-ignore
    if (todoList != oldTodoList){
        console.log(`updated todolist`)
    }
    //this.forceUpdate();

    if (!haveUpdated){
        console.log(`have not updated inside component`);
        setHaveUpdated(true);
    }

    return (
        <div className='todo-list-container'>
            <>
            <TodoList todoList={todoList} deleteTodoByID={deleteTodoByID} key={JSON.stringify(todoList)} />
        
            </>

        </div>
    )
}