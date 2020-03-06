import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import AddTodo from "./Components/AddTodo";

import ListTodos from "./Components/ListTodo";

function App() {
  return (
    <div>
      <Container>
        <AddTodo />
        <ListTodos />
      </Container>
    </div>
  );
}

export default App;
