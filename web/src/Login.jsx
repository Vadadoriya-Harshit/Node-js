import React, { useState, useEffect } from 'react';
import { Button, Container, Card, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [uemail, setuEmail] = useState('');
  const [upassword, setuPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    invalidCredentials: ''
  });
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    let newErrors = {};
    let isValid = true;

    if (!uemail || !validateEmail(uemail)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (!upassword || upassword.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    } else {
      newErrors.password = '';
    }

    if (isValid) {
      const foundUser = userData.find(
        (user) => user.email === uemail && user.password === upassword
      );

      if (foundUser) {
        setLoginSuccess(true);
        setErrors({ email: '', password: '', invalidCredentials: '' });
        alert('Logged in Successfully...!', navigate('/'),
        window.location.reload(true));

        console.log('First Name:', foundUser.fname);
        console.log('Last Name:', foundUser.lname);

        localStorage.setItem('fname', foundUser.fname);
        localStorage.setItem('lname', foundUser.lname);
        localStorage.setItem('email', foundUser.email);
      
      } else {
        setLoginSuccess(false);
        setErrors({ ...newErrors, invalidCredentials: 'Invalid email or password' });
        alert('Invalid Username Or Password..!', navigate('/Login'));
      }
    } else {
      setErrors(newErrors);
      setLoginSuccess(false);
    }
  };

  return (
    <Container className='my-5'>
      <Card>
        <Row className='g-0 align-items-center'>
          <Col md='4'>
            <Card.Img src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid="true" />
          </Col>
          <Col md='8'>
            <Card.Body>
              <h1 className='text-center mb-5'>Login</h1>
              <Form>
                <Form.Group className='mb-4'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    value={uemail}
                    onChange={(e) => setuEmail(e.target.value)}
                    isInvalid={!!errors.email || !!errors.invalidCredentials}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.email || errors.invalidCredentials}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    value={upassword}
                    onChange={(e) => setuPassword(e.target.value)}
                    isInvalid={!!errors.password || !!errors.invalidCredentials}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.password || errors.invalidCredentials}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button className='mb-4 w-100' onClick={handleLogin}>Sign in</Button>
                {loginSuccess && (
                  <div className='text-success'>Login Successful!</div>
                )}
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Login;
