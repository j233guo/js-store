import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Nav className="mr-auto">
                <Nav.Link href="/product-list/bestseller">Best Sellers</Nav.Link>
                <Nav.Link href="/product-list/all">All Products</Nav.Link>
                <Nav.Link href="/product-list/Home">Home</Nav.Link>
                <Nav.Link href="/product-list/Electronics">Electronics</Nav.Link>
                <Nav.Link href="/product-list/Computers">Computers</Nav.Link>
                <Nav.Link href="/product-list/Clothing">Clothings</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavigationBar
