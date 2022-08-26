import './App.css';
import { useState } from 'react';

function App() {
  

  let [answer, setAnswer] = useState()
  let [num, setNum] = useState({num1: 0, num2: 0})

  function clickHandler(input){
    
    switch (input) {
      case "add":
        setAnswer(num1 + num2);
        break;
      
      case "sub":
        setAnswer(num1 -num2);
        break;

      case "mul":
        setAnswer( num1 * num2);
        break;

      case "div":
        setAnswer((num1 / num2).toFixed(2));
        break;
    }
  }
  return (
    <div className="App">
      <input type="number" onChange = {(event) => setNum(prev => ({...prev, num1: Number(event.target.value)}))}></input>
      <input type="number" onChange = {(event) => setNum(prev => ({...prev, num2: Number(event.target.value)}))}></input>
      <button onClick={() => clickHandler("add")}>+</button>
      <button onClick={() => clickHandler("sub")}>-</button>
      <button onClick={() => clickHandler("mul")}>X</button>
      <button onClick={() => clickHandler("div")}>/</button>
      <div>{answer}</div>
    </div>
    
  );
}

export default App;
