import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const inputValue = document.querySelectorAll(".input-number")

  let [answer, setAnswer] = useState()
  function clickHandler(input){
    let num1 = Number(inputValue[0].value)
    let num2 = Number(inputValue[1].value)
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
      <input type="number" className='input-number'></input>
      <input type="number" className='input-number'></input>
      <button onClick={() => clickHandler("add")}>+</button>
      <button onClick={() => clickHandler("sub")}>-</button>
      <button onClick={() => clickHandler("mul")}>X</button>
      <button onClick={() => clickHandler("div")}>/</button>
      <div>{answer}</div>
    </div>
    
  );
}

export default App;
