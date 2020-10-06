import React from "react";

import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, signIn } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter={counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {isLogged ? <p>You are logged</p> : <p> I don't know you !</p>}
        <button onClick={() => dispatch(signIn())}>{isLogged ? "Wyloguj" : "zaloguj"}</button>
      </header>
    </div>
  );
}

export default App;
