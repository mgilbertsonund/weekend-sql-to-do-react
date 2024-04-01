import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './taskForm.jsx';
import TaskItem from './TaskItem.jsx';

function TaskList() {
    const [todoList, setToDoList] = useState([]);
    const [inputTask, setInputTask] = useState('');
    const [taskCompletion, setTaskCompletion] = ('false');

    const getTaskList = () => {
        axios.get('/api/todo').then(response => {
            setToDoList(response.data);
        }).catch((error) => {
            console.log('something went wrong in GET', error);
            alert('Something went wrong');
        })
    }

    useEffect(() => {
        console.log('useEffect');
        getTaskList(); 
    }, []);

    return(
        <>
            <TaskForm task={inputTask} setTask={setInputTask} taskCompletion={taskCompletion} setTaskCompletion={setTaskCompletion} />
            <div>
                {
                    todoList.map(task => (
                        <TaskItem key={task.id} task={task} getTaskList={getTaskList} />
                    ))
                }
            </div>
        </>
    )
}

export default TaskList;
