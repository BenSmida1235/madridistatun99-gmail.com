import React from "react";
import { connect } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import { deleteTodo, completeTodo } from "../JS/Actions/Actions";

import Modals from "./Modals";

function ListTodos(props) {
  console.log("props", props);
  return props.todos.map((el, key) => (
    <ListGroup key={key} style={{ display: "flex" }}>
      <input
        type="checkbox"
        aria-label="Checkbox for following text input"
        onClick={() => props.completeTodo(el.id)}
      />
    <Modals todo={el} />
      <Button variant="danger" onClick={() => props.deleteTodo(el.id)}>
        Delete
      </Button>
      <p style={{ display: "flex" }} className={el.isComplete ? "checked" : ""}>
        {el.text}
      </p>
    </ListGroup>
  ));
}

const MapStateToProps = state => {
  return {
    todos: state
  };
};

const MapDispatchToProps = {
  deleteTodo,
  completeTodo
};

export default connect(MapStateToProps, MapDispatchToProps)(ListTodos);
