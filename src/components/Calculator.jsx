
import { useState } from 'react'

function Button({ value, handleInput }) {
  return (
    <>
      <button className="calculator-button" onClick={() => handleInput(value)}>
        {value}
      </button>
    </>

  );
}

function OutputScreen({ input, result }) {
  return (
    <div className="output-screen">
      <input type="text" value={input} onChange={(e) => { e.target.value }} readOnly />
      <input type="text" value={result} onChange={(e) => { e.target.value }} readOnly />
    </div>
  );
}

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  function handleEvalutaion(value) {
    const lastChar = input.slice(-1);
    if (input === '' && ['+', '-', '*', '/'].includes(value) && input.slice(-1) !== '.') {
      return false; // do not allow operator as first input
    } else if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
      return false; // do not allow consecutive operators
    } else if (lastChar === '.' && ['+', '-', '*', '/'].includes(value)) {
      return false; // do not allow operator after decimal point
    } else if (lastChar === '.' && value === '.') {
      return false; // do not allow consecutive decimal points
    } else if (['+', '-', '*', '/'].includes(lastChar) && value === '.') {
      setInput(input + "0."); // add a zero before decimal point if last character is an operator
      return true;
    } else if (value === '.' && input === '') {
      setInput('0.'); // start with zero if decimal point is the first input
      return true;
    } else {
      setInput(input + value);
      return true;
    }
  }

  function handleInput(value) {
    if (value === '=') {
      const lastChar = input.slice(-1);
      console.log(['+', '-', '*', '/'].includes(lastChar));
      if (['+', '-', '*', '/'].includes(lastChar)) {
        return; // do not allow operator to be computed if expression is not complete
      }
      else {
        setResult(eval(input));
        console.log(input);
      }

    } else if (value === 'Clear') {
      setInput('');
      setResult('');
    } else if (value === 'Delete') {
      setInput(input.slice(0, -1));
      setResult('');
    } else {
      handleEvalutaion(value);
    }
  }

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <OutputScreen input={input} result={result} />
      <div className="button-row">
        <Button value="Clear" handleInput={handleInput} />
        <Button value="Delete" handleInput={handleInput} />
        <Button value="." handleInput={handleInput} />
        <Button value="/" handleInput={handleInput} />
      </div>
      <div className="button-row">
        <Button value="7" handleInput={handleInput} />
        <Button value="8" handleInput={handleInput} />
        <Button value="9" handleInput={handleInput} />
        <Button value="*" handleInput={handleInput} />
      </div>
      <div className="button-row">
        <Button value="4" handleInput={handleInput} />
        <Button value="5" handleInput={handleInput} />
        <Button value="6" handleInput={handleInput} />
        <Button value="-" handleInput={handleInput} />
      </div>
      <div className="button-row">
        <Button value="1" handleInput={handleInput} />
        <Button value="2" handleInput={handleInput} />
        <Button value="3" handleInput={handleInput} />
        <Button value="+" handleInput={handleInput} />
      </div>
      <div className="button-row">
        <Button value="0" handleInput={handleInput} />
        <Button value="=" handleInput={handleInput} />
      </div>

    </div>
  );
}



