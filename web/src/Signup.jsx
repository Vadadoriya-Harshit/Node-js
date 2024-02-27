import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [fnameError, setFnameError] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
 const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation
    let valid = true;
  
    if (fname.trim() === '') {
      setFnameError('Please enter your first name');
      valid = false;
    } else {
      setFnameError('');
    }
  
    if (lname.trim() === '') {
      setLnameError('Please enter your last name');
      valid = false;
    } else {
      setLnameError('');
    }
  
    if (email.trim() === '') {
      setEmailError('Please enter your email');
      valid = false;
    } else {
      setEmailError('');
    }
  
    if (password.trim() === '') {
      setPasswordError('Please enter a password');
      valid = false;
    } else {
      setPasswordError('');
    }
  
    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Please confirm your password');
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }
  
    // If all validations pass, proceed with form submission
    if (valid) {
      const data = {
        fname: fname,
        lname: lname,
        email: email,
        password: password
      };
  
      try {
        const response = await fetch('http://localhost:8000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          alert('Sign up successful...!',navigate('/Login'));
          // Perform actions upon successful response
          console.log('Form submitted:', { fname, lname, email, password, confirmPassword });
        } else {
          throw new Error('Something went wrong...!');
        }
      } catch (error) {
        alert('Something went wrong...!');
        // Handle errors or display an error message to the user
      }
    }
    setFname('');
    setLname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };
  

  return (
    <Container fluid className='p-4 background-radial-gradient overflow-hidden'>
      <Row>
      <Col md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

<h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
  The best offer <br />
  <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
</h1>

<p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
  quibusdam tempora at cupiditate quis eum maiores libero
  veritatis? Dicta facilis sint aliquid ipsum atque?
</p>

</Col>
        <Col md='6' className='position-relative'>
          <Card className='my-5 bg-glass'>
            <Card.Body className='p-5'>
              <h2 className="text-center mb-4">Create an Account</h2>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md='6'>
                    <Form.Group className='mb-4'>
                      <Form.Label>First name</Form.Label>
                      <Form.Control type='text' value={fname} onChange={(e) => setFname(e.target.value)} />
                      {fnameError && <p className="text-danger">{fnameError}</p>}
                    </Form.Group>
                  </Col>
                  <Col md='6'>
                    <Form.Group className='mb-4'>
                      <Form.Label>Last name</Form.Label>
                      <Form.Control type='text' value={lname} onChange={(e) => setLname(e.target.value)} />
                      {lnameError && <p className="text-danger">{lnameError}</p>}
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className='mb-4'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  {emailError && <p className="text-danger">{emailError}</p>}
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Create Password</Form.Label>
                  <Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                  {passwordError && <p className="text-danger">{passwordError}</p>}
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  {confirmPasswordError && <p className="text-danger">{confirmPasswordError}</p>}
                </Form.Group>
                <div className='d-flex justify-content-center mb-4'>
                  <Form.Check type='checkbox' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>
                <Button className='w-100 mb-4' variant='primary' size='lg' type='submit'>Sign Up</Button>
                <div className="text-center">
                <p>or sign up with:</p>

                <Button variant='light' className='mx-3' style={{ color: '#1266f1' }}>
                  <FontAwesomeIcon icon={faFacebookF} size='sm'/>
                </Button>

                <Button variant='light' className='mx-3' style={{ color: '#1266f1' }}>
                  <FontAwesomeIcon icon={faTwitter} size='sm'/>
                </Button>

                <Button variant='light' className='mx-3' style={{ color: '#1266f1' }}>
                  <FontAwesomeIcon icon={faGoogle} size='sm'/>
                </Button>

                <Button variant='light' className='mx-3' style={{ color: '#1266f1' }}>
                  <FontAwesomeIcon icon={faGithub} size='sm'/>
                </Button>
              </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
