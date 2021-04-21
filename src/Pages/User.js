import {useEffect, useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Container } from 'react-bootstrap'

const User = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/users/607df7db07fc9135058e4357")
        .then((res) => {
            return res.json;
        })
        .then((json)=>{
            console.log(json)
        })
        .catch(err => {console.log(err)})
    }, [])

    return (
        <>
        <Header/>
        <Container style={{marginTop: "2rem", marginBottom:"10rem"}}>
        </Container>
        <Footer/>
        </>
    )
}

export default User