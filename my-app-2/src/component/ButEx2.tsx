import { useState } from "react";

export default function MyPages() {
  const [value, setValue] = useState<string>();

  function handleChange(event: any) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
