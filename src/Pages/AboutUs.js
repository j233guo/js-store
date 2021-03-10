import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Container } from 'react-bootstrap'

const AboutUs = () => {
    return (
        <>
        <Header/>
        <Container style={{marginTop: "2rem", marginBottom:"10rem"}}>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi vel nisl fringilla condimentum sed vitae ex. Phasellus placerat justo ac nisl tempor, quis rutrum nisl pharetra. Praesent et lectus nunc. Aliquam egestas arcu vitae risus fermentum, vel rhoncus leo varius. Nulla sit amet tortor nec nibh congue interdum vel id lorem. Sed pellentesque commodo commodo. Morbi eu venenatis ex, a tincidunt lectus. In nisi eros, ornare in ipsum sed, sollicitudin porta dolor. Morbi vel lorem vel lorem volutpat cursus. Sed sit amet lectus finibus lectus venenatis ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
            <p>Sed efficitur ultricies nibh non pretium. Morbi dapibus iaculis vestibulum. Suspendisse et mattis sapien. Suspendisse viverra quis dolor quis viverra. Nunc efficitur magna justo. Donec id nulla nulla. Nullam elit mauris, tristique ac dapibus vel, gravida et nisl. Proin consequat diam nibh. Quisque porta, lorem nec egestas facilisis, enim ante faucibus eros, sit amet porta urna magna id odio.</p>
        </Container>
        <Footer/>
        </>
    )
}

export default AboutUs
