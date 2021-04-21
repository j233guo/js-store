import {useState, useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Container, Col, Row, Button } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'

const ProductPage = (props) => {

    const [item, setItem] = useState({});
    const [display, setDisplay] = useState(true);

    useEffect(() => {
        const url=`http://localhost:5000/products/${props.match.params.p}`;
        fetch(url).then((res) => {
            return res.json();
        }).then((json) => {
            if (json.message === "Product does not exist") {
                setDisplay(false)
            } else {
                setItem(json.body[0]);
            }
        }).catch((err) => {
            console.log("Encountered error: " + err)
        })
    }, []);

    return (
        <>
        <Header/>
        <Container style={{marginTop:"5rem", marginBottom:"10rem"}}>
            <h3 className={display? "hide" : ""}>Product does not exist</h3>
            <div className={display? "" : "hide"}>
                <Row>
                    <Col><img src={item.img} style={{maxWidth:"75%"}}/></Col>
                    <Col>
                        <h1>{item.title}</h1>
                        <h2>${item.price}</h2>
                        <p style={{marginTop: "2rem", marginBottom:"2rem"}}>{item.description}</p>
                        <label htmlFor="qty">Quantity: </label>
                        <select name="qty" style={{marginLeft:"10px"}} value={item.qty}>
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
            </div>
        </Container>
        <Footer/>
        </>
    )
}

export default ProductPage
