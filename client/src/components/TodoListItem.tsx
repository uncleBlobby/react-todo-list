export const TodoListItem = ({ todoList, title, description, date }: any) => {
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
          
        </div>

    )
}