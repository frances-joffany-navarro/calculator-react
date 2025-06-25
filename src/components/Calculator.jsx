
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
      <p>{input}</p>
      <p className="result">{result}</p>
    </div>
  );
}

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  function handleInput(value) {
    if (value === '=') {
      console.log('Calculating result for:', parseFloat(input));
    } else if (value === 'Clear') {
      setInput('');
      setResult('');
    } else if (value === 'Delete') {
      setInput(input.slice(0, -1));
    } else {
      //check if new input is valid
      // the first input cannot be an oerator
      // no consecutive operators allowed
      // no operator at the end of the input

      const lastChar = input.slice(-1);
      if (input === '' && ['+', '-', '*', '/'].includes(value) && input.slice(-1) !== '.') {
        return; // do not allow operator as first input
      } else if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
        return; // do not allow consecutive operators
      } else if (lastChar === '.' && ['+', '-', '*', '/'].includes(value)) {
        return; // do not allow operator after decimal point
      }
      else {
        setInput(input + value);
      }
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



