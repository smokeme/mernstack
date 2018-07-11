import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/actions/itemActions";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import PropTypes from "prop-types";
class ItemModal extends Component {
  state = {
    isOpen: false,
    name: ""
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.toggle();
  }
  render() {
    const { isOpen, name } = this.state;
    return (
      <div>
        <Button
          color="dark"
          style={{ marginTop: "20px" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>
        <Modal isOpen={isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit.bind(this)}>
              <FormGroup>
                <Label>Name:</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  value={name}
                  onChange={this.onChange.bind(this)}
                  placeholder="Name"
                />
              </FormGroup>
              <FormGroup>
                <Button block color="dark">
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ItemModal.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default connect(
  null,
  { addItem }
)(ItemModal);
