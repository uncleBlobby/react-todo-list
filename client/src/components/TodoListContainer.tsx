import { useEffect, useState } from "react";
import { TodoList } from "./TodoList"

export const TodoListContainer = ({ todoList, deleteTodoByID, haveUpdated, setHaveUpdated }: any) => {

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