import React, { useState } from "react";
import Button from "./components/Button";

let style;
try {
  style = require("./assets/style.css");
} catch (error) {
  style = {};
}

export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <div className="title-container">
          <h2>COUNTER REACT APP</h2>
          <div className="title-underline"></div>
        </div>
        <div className="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
  );
}
