import styles from './App.module.css';
// import { User } from './Users/UserComp';
// import { users } from './Users/User';
// import { planets } from './Planets/Planets';
// import { Planet } from './Planets/PlanetsComp';
import { useState } from 'react';


const TutorialEnd = () => {
  const time = "1:29:32"; //Wpisz w ktorej minucie skonczyles tutorial ok
  return (
      <p>Skonczylem tutorial w {time} </p>
  );
}


function App() {
  
  // jak wrocisz napisz jeszcze raz variable count z useState hookiem a pozniej zaimplementuj buttony zeby działały, wszystko useState hookiem

  return (
    <div className={styles.App}>
      <TutorialEnd />
      <button> Increase </button>
      <button> Decrease </button>
      <button> Set to zero </button>

      {/* {count} */}
    </div>
  );
}

export default App;

