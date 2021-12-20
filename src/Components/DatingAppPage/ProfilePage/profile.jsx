import { useState, useEffect } from "react";
import "./profile.css";
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from "axios";

function Profile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pic, setPic] = useState("");
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("http://localhost:3001/api/cards");

            setPeople(req.data);
        }

        fetchData();
    }, []);
    const submitHandler = (id) =>{
        axios.put("http://localhost:3001/api/users/profile", {id: id, name: name, email: email, password: password, pic: pic});
      };
    
      //delte cookie when logout
    // const deleteCookie = () => {
    //     axios.get("http://localhost:3001/api/users/cookieDelete", {withCredentials: true}).then((res)=>{
    //     console.log(res.json);
    //   })
    // }

    return (
        <div className="Profile">
            <h1>Profile Page</h1>
            <Form>  
            
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
            {people.map((val, key) => (
                <Button variant="primary" type="submit" onClick={()=>submitHandler(val._id)}>   
                Register
                </Button>
            ))}
            <Row className="py-3">
              <Col>
                <Button variant="danger" type="submit" > {/*onClick={deleteCookie}*/}
                    Logout
                </Button>
              </Col>
            </Row>
          </Form> 
        </div>
    )
}

export default Profile;
