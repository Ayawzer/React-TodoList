import styles from './App.module.css';
// import { User } from './Users/UserComp';
// import { users } from './Users/User';
// import { planets } from './Planets/Planets';
// import { Planet } from './Planets/PlanetsComp';
import { useState } from 'react';
import { Task } from './Tasks/Task';


const TutorialEnd = () => {
  const time = "2:06:36"; //Wpisz w ktorej minucie skonczyles tutorial ok
  return (
      <p>Skonczylem tutorial w {time} </p>
  );
}


function App() {
 // sprobuj napsiac sam cala aplikacje todolist od nowa, oagarniasz logike wiec nie powinno byc problemow ok style tez sobie ogarnij gdzie jaki dac
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
      <TutorialEnd />
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

