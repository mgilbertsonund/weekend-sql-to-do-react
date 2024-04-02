import axios from 'axios';

function ToDoForm({ todo, setInputToDo, getToDoList }) {
    const addToDo = (e) => {
        e.preventDefault();
        console.log('add todo', todo);
        const data = { todo: todo, isDone: false };
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
            <div className='form-header'>
                <h2>Add To Dos</h2>
            </div>
            <div className='form-container'>
                <form onSubmit={addToDo}>
                    <input type="text" required placeholder="What do you have to do today?" value={todo} onChange={(e) => setInputToDo(e.target.value)} />
                    <input type="submit" value="Add" />
                </form>
            </div>
            </>
    )
}

export default ToDoForm;