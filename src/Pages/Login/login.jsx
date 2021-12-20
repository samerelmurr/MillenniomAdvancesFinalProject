import "./login.css";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { StrictMode, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {Navbar} from "../index";
// import GoogleLogin from 'react-google-login';
// import Cookies from 'universal-cookie';
 
// const cookies = new Cookies();
// axios.defaults.withCredentials = true;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      } 
 
      setLoading(true);

      const {data} = await axios.post("http://localhost:3001/api/users/login", {
        email, password
      }, config);

      console.log(data);
      navigate("/DatingApp");
      localStorage.setItem("userInfo", JSON.stringify(data));
      
      //cookie
      // axios.get("http://localhost:3001/api/users/cookie", {withCredentials: true}).then((res)=>{
      //   console.log(res.json);
      // })

      setLoading(false);
    } catch (error){
      setError(error.response.data.message); 
    }
  };

  // const responseGoogle=(response)=>{
  //   navigate("/DatingApp");
  //   console.log(response);
  //   console.log(response.profileObj);
  // }

    return (
      <div className="Login">
          <Navbar />
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
            <hr></hr>
            <Row className="py-3">
              <Col>
                <h1 className="loginAuthTitle">Login with Instagram or Google</h1>
              </Col>
              <Row>
                {/* <GoogleLogin
                  clientId="359401617577-atkg5ojkd1sq15c4ab6keqd6plmb422t.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                /> */}
              </Row>
              <Row>
                <Button variant="info">Login With Instagram</Button>
              </Row>
            </Row>
          </Form>
      </div>
    );
  }
  
  export default Login;
  