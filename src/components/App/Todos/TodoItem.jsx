import axios from 'axios';

function ToDoItem({ todo, getToDoList } ) {
    const toggleToDo = (id) => {
        console.log('toggle', id);
    }

    // axios.put(`/api/todo/${id}`)
    //     .then((response) => {
    //         getToDoList();
    //     })
    //     .catch((error) => {
    //         console.log('error in put', error);
    //         alert('something went wrong');
    //     })

    return(
        <>
        <div className={todo.isDone ? 'true' : 'false'}>
            {todo.todo + ' ' + todo.isDone}
            <button>Delete</button>
        </div>
        </>
    )
}

export default ToDoItem;