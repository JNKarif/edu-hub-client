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
import { useState } from 'react';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState('dark');

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='fs-1'><RiAwardLine></RiAwardLine> EduHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link className='text-decoration-none' to='/'>Courses</Link> </Nav.Link>
              <Nav.Link href="#pricing">FAQ</Nav.Link>
              <Nav.Link><Link className='text-decoration-none' to='/blog'>Blog</Link> </Nav.Link>
            </Nav>
            <Nav className='fs-6'>

              <DarkModeToggle
                mode={mode}
                dark="Dark"
                light="Light"
                size="lg"
                inactiveTrackColor="#e2e8f0"
                inactiveTrackColorOnHover="#f8fafc"
                inactiveTrackColorOnActive="#cbd5e1"
                activeTrackColor="#334155"
                activeTrackColorOnHover="#1e293b"
                activeTrackColorOnActive="#0f172a"
                inactiveThumbColor="#1e293b"
                activeThumbColor="#e2e8f0"
                onChange={(mode) => {
                  setMode(mode);
                }}
              />
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