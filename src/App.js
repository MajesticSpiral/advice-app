import { useState, useEffect } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
    console.log(data.slip.advice);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={getAdvice}>Get Advice</button>
      {advice && <p>{advice}</p>}
      <Message count={count} />
    </div>
  );
}

function Message({ count }) {
  return (
    <p>
      You have read <strong>{count}</strong> pieces of advice
    </p>
  );
}
