
function Button({ value }) {
  return (
    <button className="calculator-button">
      {value}
    </button>
  );
}

function OutputScreen() {
  return (
    <div className="output-screen">
      <p>0</p>
      <p className="result">Result</p>
    </div>
  );
}

export default function Calculator() {
  return (
    <div className="calculator">
      <h1>Calculator Component</h1>
      <OutputScreen />
      <div className="button-row">
        <Button value="Clear" />
        <Button value="Delete" />
        <Button value="." />
        <Button value="/" />
      </div>
      <div className="button-row">
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button value="*" />
      </div>
      <div className="button-row">
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="-" />
      </div>
      <div className="button-row">
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button value="+" />
      </div>
      <div className="button-row">
        <Button value="0" />
        <Button value="=" />
      </div>

    </div>
  );
}



