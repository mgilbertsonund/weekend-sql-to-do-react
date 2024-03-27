import {useState} from 'react';

function App () {
  // create my array of tasks and input variable
  const [todoList, setToDoList] = useState([]);
  const [inputTask, setInputTask] = useState('');


  
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

export default App
