import React, { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue, dispatch) {
  // init from local storage

  /* this did not work and reloaded old storage state every time
  const [localStorage, setLocalStorage] = useState(loadFromStorage());*/
  const [state, setStateFromLocalStorage] = useState(() => {
    return loadFromStorage();
  });
  const [hasSynced, setHasSynced] = useState(false);

  function loadFromStorage() {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key)) || defaultValue;
    } catch (e) {
      value = defaultValue;
    }
    console.log("LOAD FROM LOCAL STORAGE", value);

    return value;
  }
  function updateStateFromLocalStorage(event) {
    if (event.key === key) {
      console.log("UPDATE FROM LOCAL STORAGE", event);

      setStateFromLocalStorage(parseInt(event.newValue) || defaultValue);
      setHasSynced(true);
    }
  }

  useEffect(
    () => {
      // there is an extra update back to local storage, but who cares
      console.log("UPDATE LOCAL STORAGE", state);
      window.localStorage.setItem(key, JSON.stringify(state));
    },
    [state]
  );

  useEffect(function watchForChanges() {
    window.addEventListener("storage", updateStateFromLocalStorage);
    return () => {
      window.removeEventListener("storage", updateStateFromLocalStorage);
    };
  }, []);

  return {
    localStorage: state,
    setLocalStorage: setStateFromLocalStorage,
    hasSynced,
    setHasSynced
  };
}
