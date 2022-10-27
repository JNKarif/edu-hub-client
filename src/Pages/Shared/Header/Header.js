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
              <Nav.Link><Link className='text-decoration-none' to='/blog'>Blog</Link> </Nav.Link>
            </Nav>
            <Nav>
              
              <Nav.Link href="#deets">
                {
                  user?.uid ?
                    <>
                      <span> {user?.displayName}</span>
                      <Button variant="outline-light" onClick={handleLogOut} >Log Out</Button>
                      {/* <Nav.Link onClick={handleLogOut}> </Nav.Link> */}
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