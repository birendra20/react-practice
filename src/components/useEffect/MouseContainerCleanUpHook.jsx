import React, { useState } from "react";

import HookMouseCleanUp from "./HooksCleanUp";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookMouseCleanUp />}
    </div>
  );
}

export default MouseContainer;
