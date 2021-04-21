import React from 'react'
import {useState} from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { FaExclamationCircle, FaShoppingBag } from 'react-icons/fa'
import { Redirect } from 'react-router'

const LogIn = () => {

    const [credential, setCredential] = useState({
        username:"",
        password: ""
    });

    const [errorEmail, setErrorEmail] = useState("");
    const [errorPwd, setErrorPwd] = useState("");

    const validateForm = () => {
        let isValidated = true;
        if (credential.username === "") {
            setErrorEmail("You must enter your email");
            isValidated = false;
        } else {
            setErrorEmail("");
        }
        if (credential.password === "") {
            setErrorPwd("You must enter a password");
            isValidated = false;
        } else {
            setErrorPwd("");
        }
        return isValidated;
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
            fetch("http://localhost:5000/auth", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(credential)
            })
            .then(res=>res.json())
            .then(data=>{
                alert(data.message);
                setCredential({
                    username: "",
                    password: ""
                });
            })
            .catch(err => console.log(err));
        }
        
    }

    return (
        <Card className="mx-auto" style={{width: '30rem', marginTop: '2rem'}}>
            <Card.Header className="text-center"><h2><FaShoppingBag/> J's Store</h2></Card.Header>
            <Card.Body>
                <Card.Title><h3>Log In</h3></Card.Title>

                <Form action = "/" method="POST" onSubmit={submitForm}>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                            value = {credential.username}
                            onChange={(event)=>{
                                setCredential({
                                    ...credential,
                                    username: event.target.value
                                })
                            }}/>
                        <Form.Text className="error">{errorEmail}</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" 
                            value = {credential.password}
                            onChange={(event)=>{
                                setCredential({
                                    ...credential,
                                    password: event.target.value,
                                })
                            }}/>
                        <Form.Text className="error">{errorPwd}</Form.Text>
                    </Form.Group>

                    <Button type="submit" variant="warning">Log In</Button>
                </Form>
            </Card.Body>

            <Card.Body>
                <Card.Text>Don't have an Account? <a href="/sign-up">Create yours now</a></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default LogIn