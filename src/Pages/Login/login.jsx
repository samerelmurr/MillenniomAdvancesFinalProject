import "./login.css";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      } 
 
      setLoading(true);

      const {data} = await axios.post("/api/users/login", {
        email, password
      }, config);

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      
      setLoading(false);
    } catch (error){
      setError(error.response.data.message); 
    }
  };

    return (
      <div className="Login">
          <h1>Login Page</h1>
          <Form className="loginForm" onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Row className="py-3">
              <Col>
                New Customer? <Link to="/register">Register Here</Link>
              </Col>
            </Row>
          </Form>
      </div>
    );
  }
  
  export default Login;
  