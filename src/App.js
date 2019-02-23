import React, { useContext } from "react";

import { Context } from "./Context";

function App() {
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <h1>Hello</h1>
      <h2>
        This is a demo for syncing context between tabs through local storage.
      </h2>
      <p>
        To see this in action, open{" "}
        <a href={window.location.href} target="_blank">
          {window.location.href}
        </a>{" "}
        in a separate tab.
      </p>
      <p>Change the count. It will be updated in the second tab.</p>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <h1>{state}</h1>
    </>
  );
}

export default App;
