import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

class NavBar extends Component {
  onCLick = () => {
    const { history } = this.props;
    localStorage.removeItem("token");
    history.push("/login");
  };
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Lit BlogPost</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>

        <Button variant="outline-light" href="login" onClick={this.onCLick}>
          Logout
        </Button>
      </Navbar>
    );
  }
}

export default NavBar;
