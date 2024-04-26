import React, { useState } from "react";

export default function ButtonComponent() {
  const [count, setCount] = useState(0);
  const handleNext = () => setCount(count + 1);
  const handlePrev = () => setCount(count - 1);
  return (
    <div className="App">
        <button onClick={() => handlePrev()}>sebelum</button>
      <button onClick={() => handleNext()}>Selanjutnya</button>
      <h2>{count}</h2>
    </div>
  );
}
