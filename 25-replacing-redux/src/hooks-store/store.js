import { useEffect, useState } from "react";

let listeners = [];
let globalState = {};
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = {
      ...globalState,
      ...newState,
    };
    for (const listener of listeners) {
      listener(globalState);
    }
  };
  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners.filter((lister) => lister !== setState);
    };
  }, [setState]);
  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initStore) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
