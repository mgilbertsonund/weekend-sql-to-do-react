import axios from 'axios';

function ToDoItem({ todo, getToDoList } ) {
    const toggleToDo = (id) => {
        console.log('toggle', id);
        axios.put(`/api/todo/${id}`).then((response) => {
                getToDoList();
            }).catch((error) => {
                console.log('error in put', error);
                alert('something went wrong');
            })
    }
    const removeToDo = (id) => {
        console.log('delete', id);
        axios.delete(`/api/todo/${id}`).then((response) => {
            getToDoList();
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!');
        })
    }

    return(
        <>
        <div className='todos'>
            <table>
                <tbody>
                    <tr className={todo.isDone ? 'completed' : ''}>
                        <td className='todoItem'>
                            {todo.todo}
                        </td>
                        <td className='completeToDo'>
                            {
                                todo.isDone ?
                                <button className='complete-btn' style={{backgroundColor: '#fff', color: '#999', textDecoration: 'line-through'}} onClick={() => toggleToDo(todo.id)}>Mark Complete</button> :
                                <button className='complete-btn' onClick={() => toggleToDo(todo.id)}>Mark Complete</button>
                            }
                        </td>
                        <td className='deleteToDo'>
                            {
                               todo.isDone ?
                               <button className='delete-btn' style={{backgroundColor: '#333', color: '#fff'}} onClick={() => removeToDo(todo.id)}>Delete</button> :
                               <button className='delete-btn' onClick={() => removeToDo(todo.id)}>Delete</button> 
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ToDoItem;