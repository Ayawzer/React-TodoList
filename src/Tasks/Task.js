import styles from '../../src/App.module.css'
export const Task = (props) => {
    return (
        <div className={styles.Task}>
            <h2 style={{color: props.completed ? "green" : "black", textDecoration: props.completed ? "line-through" : "none"}} > {props.name} </h2>
            <button onClick={() => props.deleteTask(props.id)} > X </button>
            <button onClick={() => props.updateTask(props.id, !props.completed)} > Done/undo </button>
        </div>
    );
}