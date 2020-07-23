import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../../components/Button";

function Example() {
  // "count"라는 새 상태 변수를 선언합니다
  const [count, setCount] = useState(0);

  return (
    <div>
      <Card />
      <Button />

      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
}

export default Example;
