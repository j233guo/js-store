import React from 'react'
import {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ProductListItems from '../Components/ProductListItems'

const ProductList = (props) => {

    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState([]);
    const filterProduct = (productList) => {
        if (props.match.params.p === "bestseller") {
            let best = productList.filter((product) => {
                return product.bestseller === true
            });
            setProducts(best)
            setTitle("Best Sellers")
        } else if (props.match.params.p === "Home") {
            let home = productList.filter((product) => {
                return product.category === "Home"
            });
            setProducts(home)
            setTitle("Home")
        } else if (props.match.params.p === "Computers") {
            let computers = productList.filter((product) => {
                return product.category === "Computers"
            });
            setProducts(computers)
            setTitle("Computers")
        } else if (props.match.params.p === "Electronics") {
            let electronics = productList.filter((product) => {
                return product.category === "Electronics"
            });
            setProducts(electronics)
            setTitle("Electronics")
        } else if (props.match.params.p === "Clothing") {
            let clothing = productList.filter((product) => {
                return product.category === "Clothing"
            });
            setProducts(clothing)
            setTitle("Clothings")
        } else if (props.match.params.p === "all") {
            setProducts(productList)
            setTitle("All Products")
        }
    }

    const chunk = (arr, size) => {
        let cache = [];
        const tmp = [...arr];
        if (size <= 0) {
            return cache
        }
        while (tmp.length) {
            cache.push(tmp.splice(0, size))
        }
        return cache
    }

    const productsChunks = chunk(products, 3)

    const rows = productsChunks.map((productChunk, index) => {
        const productsCols = productChunk.map((product) => {
            return (
                <Col xs="4" key={product.id}>
                    <ProductListItems key={product.id} id={product.id} title={product.title} price={product.Price} img={product.img}/>	  
                </Col>
            );
        });
        return <Row key={index} style={{marginTop:"50px"}}>{productsCols}</Row>
    });

    useEffect(() => {
            const url="https://js-store-db.herokuapp.com/products";
            fetch(url).then((res) => {
                return res.json();
            }).then((json) => {
                filterProduct(json);
            }).catch((err) => {
                console.log("Encountered error: " + err)
            })
        }, []
    )

    return (
        <>
        <Header/>
            <Container style={{marginTop:"3rem", marginBottom:"10rem"}}>
                <h1>{title}</h1>
                {rows}
            </Container>
        <Footer/>
        </>
    )
}

export default ProductList