/* eslint-disable react/prop-types */
import { createContext, useReducer, useMemo } from 'react';
export const FuzzyBunnyContext = createContext();
export const FuzzyBunnyDispatchContext = createContext();

function reducer(list, { type, payload }) {
  switch (type) {
    case 'load':
      return payload;
    case 'add':
      return [...list, payload];
    case 'update':
      return list.map((f) => (f.id === payload.id ? payload : f));
    case 'remove':
      return list.filter((f) => f.id !== payload.id);
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

export default function FuzzyBunnyProvider({ children }) {
  const [families, familyDispatch] = useReducer(reducer, null);
  const [bunnies, bunniesDispatch] = useReducer(reducer, null);

  // TODO: useMemo?
  const value = {
    families,
    bunnies,
  };
  console.log(bunnies, 'context');
  const dispatchValue = useMemo(
    () => ({
      bunniesDispatch,
      familyDispatch,
    }),
    [bunniesDispatch, familyDispatch]
  );
  return (
    <FuzzyBunnyContext.Provider value={value}>
      <FuzzyBunnyDispatchContext.Provider value={dispatchValue}>
        {children}
      </FuzzyBunnyDispatchContext.Provider>
    </FuzzyBunnyContext.Provider>
  );
}
