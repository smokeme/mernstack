import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavbarToggler,
  Collapse
} from "reactstrap";

export default class AppNavBar extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    return (
      <Navbar color="dark" dark expand="sm">
        <Container>
          <NavbarBrand href="/">MERNStack</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
