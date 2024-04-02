import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm.jsx'
import TodoItem from './TodoItem.jsx';

function ToDoList() {
    const [todoList, setToDoList] = useState([]);
    const [inputToDo, setInputToDo] = useState('');
    const [toDoCompletion, setToDoCompletion] = ('');

    const getToDoList = () => {
        axios.get('/api/todo').then(response => {
            setToDoList(response.data);
        }).catch((error) => {
            console.log('something went wrong in GET', error);
        })
    }

    useEffect(() => {
        console.log('useEffect');
        getToDoList(); 
    }, []);

    return(
        <>
        <div>
            <TodoForm todo={inputToDo} setInputToDo={setInputToDo} getToDoList={getToDoList}/>
        </div>
            <div>
                {
                    todoList.map(todo => (
                        <TodoItem key={todo.id} todo={todo} getToDoList={getToDoList} />
                    ))
                }
            </div>
        </>
    )
}

export default ToDoList;
