import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'


function App () {
  // // create my array of tasks and input variable
  // const [todoList, setToDoList] = useState([]);
  // let [inputTask, setInputTask] = useState('');
  // let [taskCompletion, setTaskCompletion] = ('false');

  // const addTask = () => {
  //   axios.post('/api/todo', {task: inputTask, isDone: taskCompletion})
  //     .then(response => {
  //       setInputTask = '';
  //       taskCompletion = '';

  //     })
  // }


  
  return (
    <div>
      <h1>TO DO APP</h1>
      <input
        value = {inputTask} 
        type = "text" 
        onChange={e => setInputTask(e.target.value)}
      />
      <button>
        Add
      </button>
    </div>
  );

}

export default App;
