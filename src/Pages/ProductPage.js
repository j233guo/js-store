import {useState, useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Container, Col, Row, Button } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'

const ProductPage = (props) => {

    const [item, setItem] = useState({});

    useEffect(() => {
        const url=`https://js-store-db.herokuapp.com/products?id=${props.match.params.p}`;
        fetch(url).then((res) => {
            return res.json();
        }).then((json) => {
            setItem(json[0])
        }).catch((err) => {
            console.log("Encountered error: " + err)
        })
    }, []);

    return (
        <>
        <Header/>
        <Container style={{marginTop:"5rem", marginBottom:"10rem"}}>
            <Row>
                <Col><img src={item.img} style={{maxWidth:"75%"}}/></Col>
                <Col>
                    <h1>{item.title}</h1>
                    <h2>${item.Price}</h2>
                    <p style={{marginTop: "2rem", marginBottom:"2rem"}}>{item.description}</p>
                    <label htmlFor="qty">Quantity: </label>
                    <select name="qty" style={{marginLeft:"10px"}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br/><br/>
                    <Button variant="warning"><FaShoppingCart/> Add to Cart</Button>
                </Col>
            </Row>  
        </Container>
        <Footer/>
        </>
    )
}

export default ProductPage
