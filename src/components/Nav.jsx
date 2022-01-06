import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import CounterContext from "./context/CounterContext";

function Nav() {
  const { counters } = useContext(CounterContext);
  return (
    <div className="py-3">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>
            {counters.filter((c) => c.value > 0).length}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nav;
