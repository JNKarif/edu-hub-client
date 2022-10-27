import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { RiAwardLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthPorvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><RiAwardLine></RiAwardLine> EduHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link className='text-decoration-none' to='/'>Courses</Link> </Nav.Link>
              <Nav.Link href="#pricing">FAQ</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link><Link className='text-decoration-none' to='/blog'>Blog</Link> </Nav.Link>
              <Nav.Link href="#deets">
                {
                  user?.uid ?
                    <>
                      <span> {user?.displayName}</span>
                      <Nav.Link onClick={handleLogOut}>Log Out </Nav.Link>
                    </>

                    :
                    <Link className='text-decoration-none'
                      to='/login'> Login</Link>
                }

              </Nav.Link>

              <Nav.Link href="#deets">
                {user?.photoURL ?
                  <Image style={{ height: '30px' }}
                    roundedCircle
                    src={user?.photoURL}></Image>
                  : <FaUser></FaUser>
                }
              </Nav.Link>
              <Nav.Link >

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;