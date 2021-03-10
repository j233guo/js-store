import React from 'react'
import {useState} from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { FaExclamationCircle, FaShoppingBag } from 'react-icons/fa'

const LogIn = () => {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const [errorEmail, setErrorEmail] = useState("");
    const [errorPwd, setErrorPwd] = useState("");

    const validate = () => {
        let isValidated = true;
        if (email === "") {
            setErrorEmail("You must enter your email");
            isValidated = false;
        } else {
            setErrorEmail("")
        }
        if (pwd === "") {
            setErrorPwd("You must enter your password");
            isValidated = false;
        } else {
            setErrorPwd("");
        }
        return isValidated;
    }

    return (
        <Card className="mx-auto" style={{width: '30rem', marginTop: '2rem'}}>
            <Card.Header className="text-center"><h2><FaShoppingBag/> J's Store</h2></Card.Header>
            <Card.Body>
                <Card.Title><h3>Log In</h3></Card.Title>
                <Card.Text>
                    <Form>
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
                            }}/>
                            <Form.Text className="error">
                                {errorPwd}
                            </Form.Text>
                        </Form.Group>
                        <Button variant="warning" onClick={() => {
                            setErrorEmail("")
                            setErrorPwd("")
                            if(validate()) {
                                alert("validated")
                            }
                        }}>
                            Log in to my account
                        </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Text>Don't have an Account? <a href="/sign-up">Create yours now</a></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default LogIn
