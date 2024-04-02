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
        <div className={todo.isDone ? 'true' : 'false'}>
            {todo.todo + ' ' + todo.isDone}
            {
                todo.isDone ?
                <button onClick={() => toggleToDo(todo.id)}>done</button> :
                <button onClick={() => toggleToDo(todo.id)}>delete</button>
            }
        </div>
        </>
    )
}

export default ToDoItem;