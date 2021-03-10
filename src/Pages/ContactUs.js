import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Form, Col, Button, Container } from "react-bootstrap"

const ContactUs = () => {
    return (
        <>
        <Header/>
        <Container style={{marginTop: "2rem", marginBottom:"10rem"}}>
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label>Your Feedbacks</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter your feedbacks" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={()=>{alert("Thank you for your feedback")}}>
                    Submit
                </Button>
            </Form>
        </Container>
        
        <Footer/>
        </>
    )
}

export default ContactUs
