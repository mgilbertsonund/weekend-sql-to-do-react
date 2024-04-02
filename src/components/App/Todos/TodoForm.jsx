import axios from 'axios';

function ToDoForm({ todo, setInputToDo, getToDoList }) {
    const addToDo = (e) => {
        e.preventDefault();
        console.log('add todo', todo);
        const data = { todo: todo, isDone: false};
        axios.post('/api/todo', data).then((response) => {
            getToDoList();
            setInputToDo('');
        }).catch((error) => {
            console.log('error in POST', error);
            alert('Something went wrong');
        })
    }

    return(
        <>
            <h2>add a task</h2>
            <form onSubmit={addToDo}>
                <input type="text" required placeholder="Add New To Do" value={todo} onChange={(e) => setInputToDo(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            </>
    )
}

export default ToDoForm;