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
                                <button style={{backgroundColor: '#f2f2f2', color: '#999', textDecoration: 'line-through'}} onClick={() => toggleToDo(todo.id)}>Mark Complete</button> :
                                <button onClick={() => toggleToDo(todo.id)}>Mark Complete</button>
                            }
                        </td>
                        <td className='deleteToDo'>
                            {
                               todo.isDone ?
                               <button style={{backgroundColor: '#f2f2f2'}} onClick={() => removeToDo(todo.id)}>Delete</button> :
                               <button onClick={() => removeToDo(todo.id)}>Delete</button> 
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