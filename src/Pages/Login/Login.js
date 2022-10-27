import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthPorvider/AuthProvider';

const Login = () => {

    const {signIn, providerLogin}= useContext(AuthContext)
const navigate= useNavigate()
const handleLogin= event=>{
    event.preventDefault();
    const form= event.target;
    const email= form.email.value;
    const password=form.password.value
    console.log(email,password)
    signIn(email,password)
    .then(result=>{
        const user= result.user;
        console.log(user)
        form.reset();
        navigate('/')
    })
    .catch(error=> console.error(error))
}

const googleProvider= new GoogleAuthProvider()
const handleGoogleSignIn=()=>{
    providerLogin(googleProvider)
    .then(result=>{
        const user =result.user;
        console.log(user)
    })
    .catch(error=>console.error(error))
}

    return (
        <div>
             <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button variant="primary" type="submit">
       Login
      </Button>

      <Button onClick={handleGoogleSignIn} className='m-2' variant="primary" type="submit">
      <FaGoogle></FaGoogle> Login with Google
      </Button>

      <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
      <p>Not registered yet ? Please <Link to='/register'>Register</Link></p>
    </Form>
        </div>
    );
};

export default Login;