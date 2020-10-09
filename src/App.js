import React from "react";
import Formulage from "../src/Components/form";
import TaskItem from '../src/Components/taskItem'
import { Alert } from 'reactstrap';
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, signIn } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.logged);
  const taskList = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Counter={counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {isLogged ? <p>You are logged</p> : <p> I don't know you !</p>}
        <button onClick={() => dispatch(signIn())}>{isLogged ? "Wyloguj" : "zaloguj"}</button> */}
        <Formulage />
      </header>
      <div className="task-list">
       

        {
        taskList.map((item) => <TaskItem name={item}/>)
         }</div>
    </div>
  );
}

export default App;
