import { useState, useEffect } from "react";

import { TodoListItem } from "./TodoListItem"

export const TodoList = ({ todoList, deleteTodoByID }: any) => {

    const [value, setValue] = useState(todoList);

    //setValue(todoList);

    useEffect(() => { setValue(todoList) }, [todoList]);

    return (
        <>
        {value.map((todo: { title: string, description: string, dueDate: string, UUID: string}, index: number) => {
            return(
                <TodoListItem deleteTodoByID={deleteTodoByID} title={todo.title} description={todo.description} date={todo.dueDate} key={todo.UUID} UUID={todo.UUID}/>
            )
        
        })}
        </>
    )
}