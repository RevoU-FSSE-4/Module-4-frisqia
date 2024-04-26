import React, { useState } from "react";

function ExTwoComp() {
  const [name, setName] = useState<string>("");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <div>
      Name:
      <input
        type="text"
        placeholder="Input Your Name"
        onChange={handleChange}
      />
      <br />
      <div> Nama Saya: {name}</div>
      <br />
      <button onClick={() => alert("success " + name)}> Submit</button>
    </div>
  );
}

export default ExTwoComp;
