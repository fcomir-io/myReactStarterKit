import React from "react";
import { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import './styles/App.scss'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          contact: [],
        };
      }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data });
        console.log(this.state.contacts);
      })
      .catch(console.log);
  }

  render() {
    return (
      <>
        <Navbar className="test" color="faded" light expand="md">
          <NavbarBrand href="/">React Bootstrap Example</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink
                className="font-weight-bold"
                href="https://www.techiediaries.com/react-bootstrap"
              >
                Tutorial
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default App;
