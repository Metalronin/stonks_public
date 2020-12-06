import { useState, useEffect } from "react";
import { number as simpulNumber } from "simpul";

function Placeholder() {
  const [account, setAccount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAccount((prevAccount) => prevAccount + 0.01);
    }, 500);
    return () => clearTimeout(timeout);
  }, [account]);

  return (
    <div>
      <div>Please wait, we're stacking the chedda 🧀</div>
      <br />
      {simpulNumber.finance(account)}
    </div>
  );
}

export default Placeholder;
