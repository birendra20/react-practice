import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <p>....use state with object.....</p>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h5>Your first name is - {name.firstName}</h5>
      <h5>Your last name is - {name.lastName}</h5>
      {/* <h5>{JSON.stringify(name)}</h5> */}
    </form>
  );
}

export default HookCounterThree;
