import styles from './App.module.css';
import { useState } from 'react';
import { Task } from './Tasks/Task';

function App() {
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const changeHandler = (event) => {
    setNewTask(event.target.value);
  }
  
  const addNewTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName: newTask,
      completed: false,
    }
    
    if (newTask !== '') {
      setTodoList([...todoList, task]);
    }
  }

  const deleteTask = (id) => {
    const filteredArray = todoList.filter(task => task.id !== id)
    setTodoList(filteredArray);
  }

  const updateTask = (id, completed) => {
    const updatedArray = todoList.map(task => task.id === id ? {...task, completed:completed} : task)
    setTodoList(updatedArray);
  }

  return (
    <div className={styles.App}>
      <div className={styles.addTask}>
        <input type='text' onChange={changeHandler} />
        <button onClick={addNewTask} > Dodaj </button>
      </div>
      <div className={styles.list}>
        {todoList.map((task, key) => {
          return (
            <Task key={key} name={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} updateTask={updateTask} />
          );
        })}
      </div>
    </div>
  );
}

export default App;

