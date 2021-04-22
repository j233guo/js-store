import React from 'react'
import {useState} from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { FaShoppingBag } from 'react-icons/fa'

const Registration = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        role: "user"
    });
    const [confirmPwd, setConfirmPwd] = useState("");

    const [errorFirstName, setErrorFirstName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPwd, setErrorPwd] = useState("");
    const [errorPwd2, setErrorPwd2] = useState("");

    const validateForm = () => {
        let isValidated = true;
        if (user.firstName === "") {
            setErrorFirstName("You must enter your first name");
            isValidated = false;
        } else {
            setErrorFirstName("")
        }
        if (user.lastName === "") {
            setErrorLastName("You must enter your last name");
            isValidated = false;
        } else {
            setErrorLastName("")
        }
        if (user.email === "") {
            setErrorEmail("You must enter your email");
            isValidated = false;
        } else {
            setErrorEmail("");
        }
        if (user.password === "") {
            setErrorPwd("You must enter a password");
            isValidated = false;
        } else {
            setErrorPwd("");
        }
        if (confirmPwd === "") {
            setErrorPwd2("You must confirm your password");
            isValidated = false;
        } else {
            if (!(user.password === confirmPwd)) {
                setErrorPwd2("Your passwords don't match")
                isValidated = false;
            } else {
                setErrorPwd2("")
            }
        }
        return isValidated;
    }
    

    const submitForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
            fetch("https://js-store-api.herokuapp.com/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                alert("user added successfully");
                setUser({
                    firstName: "",
                    lastName: "",
                    email: "",
                    username: "",
                    password: "",
                    role: "user"
                });
                setConfirmPwd("");
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <Card className="mx-auto" style={{width: '30rem', marginTop: '2rem'}}>
            <Card.Header className="text-center"><h2><FaShoppingBag/> J's Store</h2></Card.Header>
            <Card.Body>
                <Card.Title><h3>Create Account</h3></Card.Title>

                <Form action = "/" method="POST" onSubmit={submitForm}>

                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Your first name" 
                            value = {user.firstName}
                            onChange={(event)=>{
                                setUser({
                                    ...user,
                                    firstName: event.target.value
                                })
                            }}/>
                        <Form.Text className="error">{errorFirstName}</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Your last name" 
                            value = {user.lastName}
                            onChange={(event)=>{
                                setUser({
                                    ...user,
                                    lastName: event.target.value
                                })
                            }}/>
                        <Form.Text className="error">{errorLastName}</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Your email" 
                            value = {user.email}
                            onChange={(event)=>{
                                setUser({
                                    ...user,
                                    email: event.target.value,
                                    username: event.target.value
                                })
                            }}/>
                        <Form.Text className="error">{errorEmail}</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Your password" 
                            value = {user.password}
                            onChange={(event)=>{
                                setUser({
                                    ...user,
                                    password: event.target.value,
                                })
                            }}/>
                        <Form.Text className="error">{errorPwd}</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Retype your password" 
                            value = {confirmPwd}
                            onChange={(event)=>{
                                setConfirmPwd(event.target.value);
                            }}/>
                        <Form.Text className="error">{errorPwd2}</Form.Text>
                    </Form.Group>

                    <Button type="submit" variant="warning">Create an Account</Button>
                </Form>

            </Card.Body>
            <Card.Body>
                Already have an account? <a href="/sign-in">log in now</a>
            </Card.Body>
        </Card>
    )
}

export default Registration