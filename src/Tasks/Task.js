import styles from '../../src/App.module.css'
export const Task = (props) => {
    
    return (
        <div className={styles.Task}>
          <h1 style={{color: props.completed ? "green" : "black" }} >{props.taskName} </h1>
          <button onClick={() => props.updateTask(props.id, !props.completed)} > Done/Undo </button>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
      );
}