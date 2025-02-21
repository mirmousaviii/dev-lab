// React Context Example - Preventing unnecessary re-renders

import React, { createContext, useContext, useState, useMemo } from "react";

const MyContext = createContext({ count: 0, increment: () => {} });

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  
  // Using useMemo to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({ count, increment: () => setCount(c => c + 1) }), [count]);

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

const Counter = () => {
  const { count, increment } = useContext(MyContext);
  console.log("Counter re-rendered"); // Only re-renders when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const App = () => (
  <ContextProvider>
    <Counter />
  </ContextProvider>
);

export default App;
