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

    return(
        <>
        <div className='todos'>
            <table>
                <tbody>
                    <tr>
                        <td className='todoItem'>
                            {todo.todo}
                        </td>
                        <td className='completeToDo'>
                            <button onClick={() => toggleToDo(todo.id)}>Mark Complete</button>
                        </td>
                        <td className='deleteToDo'>
                        <button onClick={() => toggleToDo(todo.id)}>Delete To Do</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ToDoItem;