import "./register.css";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from "react";
import {Navbar} from "../index";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");

  const submitHandler = (e) =>{
    axios.post("http://localhost:3001/api/users/register", {name: name, email: email, password: password, pic: pic});
  };

    return (
      <div>
        <Navbar />
        <div className="Register">
            <h1>Register Page</h1>
            <Form onSubmit={submitHandler}>  
            
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="pic" className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file" 
                value={pic}
                placeholder="Profile Picture"
                onChange={(e) => setPic(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
            <Row className="py-3">
              <Col>
                Have an Account ? <Link to="/login">Login</Link>
              </Col>
            </Row>
          </Form> 
        </div>
      </div>
    );
  }
  
  export default Register;
  