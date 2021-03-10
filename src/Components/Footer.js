import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import {FaShoppingBag, FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="bottom">
            <Container>
            <Navbar.Brand><h2><FaShoppingBag/> J's Store</h2></Navbar.Brand>
            <Navbar.Text>
                <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                <p>
                    <a href="https://github.com/j233guo"><FaGithub/> Jiaming's GitHub Page</a>
                </p>
                <p><a href="/about-us">About Us</a></p>
                <p><a href="/contact-us">Contact Us</a></p>
            </Navbar.Text>
            <Navbar.Text>
                <h4 className="mt-lg-0 mt-sm-3">Address</h4>
                <p>1 Xxxx Street, Toronto, ON, CA</p>
            </Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default Footer
