import React from 'react'
import {useState} from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { FaShoppingBag } from 'react-icons/fa'

const Registration = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwd2, setPwd2] = useState("");

    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPwd, setErrorPwd] = useState("");
    const [errorPwd2, setErrorPwd2] = useState("");

    const validate = () => {
        let isValidated = true;
        if (name === "") {
            setErrorName("You must enter your name");
            isValidated = false;
        } else {
            setErrorName("")
        }
        if (email === "") {
            setErrorEmail("You must enter your email");
            isValidated = false;
        } else {
            setErrorEmail("")
        }
        if (pwd === "") {
            setErrorPwd("You must enter a password");
            isValidated = false;
        } else {
            setErrorPwd("");
        }
        if (pwd2 === "") {
            setErrorPwd2("You must confirm your password");
            isValidated = false;
        } else {
            if (!(pwd === pwd2)) {
                setErrorPwd2("Your passwords don't match")
                isValidated = false;
            } else {
                setErrorPwd2("")
            }
        }
        
        return isValidated;
    }

    return (
        <Card className="mx-auto" style={{width: '30rem', marginTop: '2rem'}}>
            <Card.Header className="text-center"><h2><FaShoppingBag/> J's Store</h2></Card.Header>
            <Card.Body>
                <Card.Title><h3>Create Account</h3></Card.Title>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" 
                            value = {name} 
                            onChange = {(event) => {
                                setName(event.target.value);
                            }} />
                        <Form.Text className="error">
                            {errorName}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                            value = {email} 
                            onChange = {(event) => {
                                setEmail(event.target.value);
                            }} />
                        <Form.Text className="error">
                            {errorEmail}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                            value = {pwd} 
                            onChange = {(event) => {
                                setPwd(event.target.value);
                            }} />
                        <Form.Text className="text-muted">
                            Passwords must consist of at least 6 characters
                        </Form.Text>
                        <Form.Text className="error">
                            {errorPwd}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Your Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" 
                            value = {pwd2} 
                            onChange = {(event) => {
                                setPwd2(event.target.value);
                            }} />
                        <Form.Text className="error">
                            {errorPwd2}
                        </Form.Text>
                    </Form.Group>
                    <Button variant="warning" onClick={() => {
                        setErrorName("");
                        setErrorEmail("");
                        setErrorPwd("");
                        setErrorPwd2("");
                        if(validate()) {
                            alert("validated")
                        }
                    }}>
                        Create Your Account
                    </Button>
                </Form>
            </Card.Body>
            <Card.Body>
                Already have an account? <a href="/sign-in">log in now</a>
            </Card.Body>
        </Card>
    )
}

export default Registration
