import { useState } from "react";

export default function MyPageTwo() {
  function onClick(event: any) {
    alert("you clickme");
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get("textExample"));
  }
  return (
    <div>
      <form onSubmit={onClick}>
        <input type="text" name="textExample" />
        <button>Click me</button>
      </form>
    </div>
  );
}
