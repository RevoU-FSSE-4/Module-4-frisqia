export default function MyPage() {
  function onClickButton() {
    console.log("you clicked me");
  }

  function onChangeText(event: any) {
    console.log("value: ", event.target.value);
  }

  return (
    <div>
      <button onClick={onClickButton}>Click me to submit</button>
      <input type="text" onChange={onChangeText} />
    
    </div>
  );
}
