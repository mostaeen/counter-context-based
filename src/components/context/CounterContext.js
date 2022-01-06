import { createContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {

  const [counters, setCounters] = useState([
    { id: 1, value: 6 },
    { id: 2, value: 7 },
    { id: 3, value: 8 },
  ]);
  const increase = (id) => {
    setCounters(
      counters.map((c) => {
        if (c.id === id) c.value += 1;
        return c;
      })
    );
  };
  const decrease = (id) => {
    setCounters(
      counters.map((c) => {
        if (c.id === id && c.value > 0) c.value -= 1;
        return c;
      })
    );
  };
  const remove = (id) => {
    setCounters(counters.filter((c) => c.id !== id));
  };
  const resetAll = () => {
    setCounters(
      counters.map((c) => {
        c.value = 0;
        return c;
      })
    );
  };


  return (<CounterContext.Provider value={{ counters, increase, decrease, remove, resetAll }}>{children}</CounterContext.Provider>
  )
};
export default CounterContext

