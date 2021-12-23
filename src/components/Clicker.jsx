import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(props.initial);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
}
