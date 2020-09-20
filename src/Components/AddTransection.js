import React, { useContext, useState } from "react";
import { GlobalContext } from "../contaxt/GlobalState";

function AddTransection() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const { addTransaction } = useContext(GlobalContext);

  const onsubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setAmount();
    setText("");
  };

  return (
    <>
      <h3>Add New Transection</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amout">
            Amount <br />
            (-) for expenses , (+) for income
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter Number..."
          />
        </div>
        <button className="btn">Add Trancsection</button>
      </form>
    </>
  );
}

export default AddTransection;
