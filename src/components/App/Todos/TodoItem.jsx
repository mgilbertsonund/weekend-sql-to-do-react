import axios from 'axios';

function ToDoItem({ todo, getToDoList } ) {
// axios.put(`/api/todo/${todo.id}`)
//     .then((response) => {
//         getToDoList();
//     })
//     .catch((error) => {
//         console.log('error in put', error);
//         alert('something went wrong');
//     })

    return(
        <>
        <div>
            hello item
        </div>
        </>
    )
}

export default ToDoItem;