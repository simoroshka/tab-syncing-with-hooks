import React, { useReducer, useEffect } from "react";
import useLocalStorage from "./LocalStorageHook";
import reducer from "./Reducer";

const Context = React.createContext(0);

export default function ContextProvider(props) {
  const {
    localStorage,
    setLocalStorage,
    hasSynced,
    setHasSynced
  } = useLocalStorage("count", 0);

  const [state, dispatch] = useReducer(reducer, localStorage);

  useEffect(
    () => {
      // we only want full reaload when the localstorage has been changed from another tab
      if (hasSynced) {
        console.log(
          "CONTEXT: localStorage changed from another tab",
          localStorage
        );
        dispatch({ type: "reload_state", payload: localStorage });
        setHasSynced(false);
      }
    },
    [hasSynced, localStorage]
  );

  useEffect(
    () => {
      console.log("CONTEXT: set local storage", state);
      setLocalStorage(state);
    },
    [state]
  );

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
