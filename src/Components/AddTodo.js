import React, { Component } from "react";
import { Card, Form, InputGroup, Button, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { addTodo } from "../JS/Actions/Actions";
class AddTodo extends Component {
  state = {
    input: ""
  };
  handlChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  add = e => {
    e.preventDefault();
    this.props.addTodo({
      id: Date.now(),
      text: this.state.input,
      isComplete: false
    });
    this.setState({
      input: ""
    });
  };
  render() {
    return (
      <Card bg="primary">
        <Card.Body>
          <h1 className={"text-white"}>Todo list</h1>
          <Form>
            <Form.Group>
              <InputGroup className="mb-3">
                <FormControl
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={this.state.input}
                  onChange={this.handlChange}
                />
                <InputGroup.Append>
                  <Button variant="success" onClick={this.add}>
                    +
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
const mapDispatchToProps  = {
  addTodo
};
const mapStateToProps = state => {
  return {
    input: state.input
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

