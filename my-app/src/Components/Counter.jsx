import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  const handleDob = () => {
    setCount(count * 2);
  };
  return (
    <div className="mx-5">
      <h1 className="bg-danger text-light">{count}</h1>
      <button className="text-warning btn mx-2 w-25 bg-dark" onClick={() => handleInc()}>Inc</button>
      <button className="btn-warning btn mx-2 w-25" onClick={()=>handleDec()}>Dec</button>
      <button className="btn-success btn mx-2 w-25" onClick={()=>handleDob()}>Doubler</button>
    </div>
  );
}

export default Button;