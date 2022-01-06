import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Counters from "./components/Counters";
import Nav from "./components/Nav";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { CounterProvider } from "./components/context/CounterContext";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
  ]);

  return (
    <CounterProvider>
      <div>
        <Nav />

        <Counters />
      </div></CounterProvider>
  );
}

export default App;
