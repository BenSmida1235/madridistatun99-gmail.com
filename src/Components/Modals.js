import React, { Component } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { editTodo } from "../JS/Actions/Actions";

class Modals extends Component {
  state = {
    show: false,
    myinput: this.props.todo.text
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleChange = e => {
    this.setState({
      myinput: e.target.value
    });
  };

  edit = () => {
    this.props.editTodo({id:this.props.todo.id, text: this.state.myinput });
    this.setState({
      myinput: ""
    });
  };

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Edit
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleShow}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit todos</Modal.Title>
          </Modal.Header>
          <FormControl
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={this.state.myinput}
            onChange={this.handleChange}
          />
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                this.handleShow();
                this.edit();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const MapDispatchtoprops = {
  editTodo
};

export default connect(null, MapDispatchtoprops)(Modals);
