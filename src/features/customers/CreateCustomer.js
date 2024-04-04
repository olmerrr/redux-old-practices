import { useState } from "react";
import { useDispatch } from "react-redux";
import customerReducer, { createCustomer } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    if (fullName && nationalId) dispatch(createCustomer(fullName, nationalId))
  }

  return (
    <form onSubmit={handleClick}>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button type="submit">Create new customer</button>
      </div>
    </form>
  );
}

export default Customer;
