import {useState, useEffect} from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ProductListItems from '../Components/ProductListItems'

const SearchPage = (props) => {

    const [products, setProducts] = useState([]);

    const filterProduct = (productList) => {

        if (props.match.params.name !== "All") {
            productList = productList.filter((product) => {
                return product.name.includes(props.match.params.name)
            })
        }
        if (props.match.params.category === "All") {
            setProducts(productList);
        } else {
            productList = productList.filter((product) => {
                return product.category === props.match.params.category
            })
            setProducts(productList)
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
        return <Row key={index}>{productsCols}</Row>
    });

    useEffect(() => {
        const url="https://js-store-db.herokuapp.com/products"
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
                <h2>Search Results for "{props.match.params.name}" in {props.match.params.category}</h2>
                {rows}
                <h3 className={products.length === 0? "" : "hide"}>Sorry, no results found....</h3>
            </Container>
        <Footer/>
        </>
    )
}

export default SearchPage
