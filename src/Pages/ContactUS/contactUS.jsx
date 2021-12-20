import React from 'react'
import "./contactUS.css"
import {Navbar} from "../index";
import emailjs from "emailjs-com";
import { Form, Button } from 'react-bootstrap';

function contactUS() {
 
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gxymsi2', 'template_qvo0dpb', e.target, 'user_MgCp2wI5VDStLlcG0qjY6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }
    return (
        <div>
            <Navbar />
            <div className="contactUs">
                <Form onSubmit={sendEmail}>
                    <Form.Group controlId="name" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name" name="name"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email" name="email"/>
                    </Form.Group>
                    <Form.Group controlId="message" className="mb-3">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" name="message" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="Send" className="mb-3">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default contactUS;
