import { useState, useEffect } from "react";
import "./App.css"; // Import your CSS

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* Spinning caregiving image instead of logo */}
        <img src="/images/caregiving.jpg" className="App-logo" alt="Caregiving" />

        <h1 className="App-title">Friendly Advice Hub</h1>

        {/* Card for advice and button */}
        <div className="App-card">
          <p className="App-advice">{advice}</p>
          <button className="App-button" onClick={getAdvice}>
            Get New Advice
          </button>
        </div>

        <Message count={count} />
      </header>
    </div>
  );
}

function Message({ count }) {
  return (
    <p className="App-advice">
      You have read <strong>{count}</strong> pieces of advice
    </p>
  );
}
