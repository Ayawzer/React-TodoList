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
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    if (newTask !== "") {
      setTodoList([...todoList, task]);
    }
  }

  const deleteTask = (id) => {
    const newArrey = todoList.filter((task) => {
      return task.id !== id;
    })
    setTodoList(newArrey)
  }

  const updateTask = (id, completed) => {
    const newArray = todoList.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          completed: completed,
        };
      } else {
        return task;
      }
    })
    setTodoList(newArray);
  }

  return (
    <div className={styles.App}>
      <TutorialEnd />
      <div className={styles.addTask}>
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className={styles.list}>
        {todoList.map((task, key) => {
          return <Task  taskName={task.taskName} id={task.id} deleteTask={deleteTask} completed={task.completed} key={key} updateTask={updateTask} />;
        })}
      </div>
    </div>
  );
}

export default App;

