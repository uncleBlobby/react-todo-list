export const TodoListItem = ({ deleteTodoByID, todoList, title, description, date, UUID }: any) => {

    const completeTodo = (UUID: any) => {
        deleteTodoByID(UUID);
        console.log(`complete todo ${UUID}`);
    }

    const cancelTodo = (UUID: any) => {
        console.log(`cancel todo ${UUID}`);
    }

    return (

        <div className='todo-item'>
          <div className='todo-header'>
            <i>{title}</i>
          </div>
          <div className='todo-due-date'>
            {date}
          </div>
          <div className='todo-description'>
            {description}
          </div>

          <div className='completion-status-buttons'>

          <div onClick={() => completeTodo(UUID)} className='complete-todo-button'>&#x2705;</div>         
          <div onClick={() => cancelTodo(UUID)} className='remove-todo-button'>&#x274C;</div>
 
          
          </div>
          
        </div>

    )
}