import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";

const PublicNavbar = () => {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar> */}

      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="mr-auto">
          <img src={logo} alt="CoderSchool" width="200px" />
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <a href="#your_github_repo_link" target="_blank">
            <img src="../images/github_icon.png" alt="Github" width="32px" />
          </a>
        </Nav>
      </Navbar>
    </>
  );
};

export default PublicNavbar;
