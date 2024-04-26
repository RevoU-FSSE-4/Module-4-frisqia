import React, { useState } from "react";

function ExComponent() {
  const [bankAccountBalance, setBankAccountBalance] = useState<number>(10000);
  return (
    <div>
      <h1>My Bank Account Balance is {bankAccountBalance}</h1>
      <br />
      <button onClick={() => setBankAccountBalance(bankAccountBalance - 1000)}>
        Minus
      </button>
      <button onClick={() => setBankAccountBalance(bankAccountBalance + 1000)}>
        Plus
      </button>
    </div>
  );
}

export default ExComponent;
