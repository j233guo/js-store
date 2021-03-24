import React from 'react'
import {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Pagination from 'react-js-pagination'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ProductListItems from '../Components/ProductListItems'
import BackToTop from '../Components/BackToTop'

const ProductList = (props) => {

    const [title, setTitle] = useState([]);
    const [rows, setRows] = useState([]);
    const [activePage, setActivePage] = useState(1);

    // spliting listings into chunks of 3
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

    const filterProduct = (productList) => {
        if (props.match.params.p === "bestseller") {
            let best = productList.filter((product) => {
                return product.bestseller === true
            });
            setTitle("Best Sellers")
            setRows(chunk(best, 3))
        } else if (props.match.params.p === "Home") {
            let home = productList.filter((product) => {
                return product.category === "Home"
            });
            setTitle("Home")
            setRows(chunk(home, 3))
        } else if (props.match.params.p === "Computers") {
            let computers = productList.filter((product) => {
                return product.category === "Computers"
            });
            setTitle("Computers")
            setRows(chunk(computers, 3))
        } else if (props.match.params.p === "Electronics") {
            let electronics = productList.filter((product) => {
                return product.category === "Electronics"
            });
            setTitle("Electronics")
            setRows(chunk(electronics,3))
        } else if (props.match.params.p === "Clothing") {
            let clothing = productList.filter((product) => {
                return product.category === "Clothing"
            });
            setTitle("Clothings")
            setRows(chunk(clothing, 3))
        } else if (props.match.params.p === "all") {
            setTitle("All Products")
            setRows(chunk(productList, 3))
        }
    }

    // Pagination
    const rowsPerPage = 4;
    const indexOfLastRow  = activePage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = rows.slice( indexOfFirstRow, indexOfLastRow );

    const renderRows = currentRows.map((row, index) => {
        const productsCols = row.map((product) => {
            return (
                <Col xs="4" key={product.id}>
                    <ProductListItems key={product.id} id={product.id} title={product.title} price={product.Price} img={product.img}/>	  
                </Col>
            );
        });
        return <Row key={index} style={{marginTop:"30px"}}>{productsCols}</Row>
    });

    const handlePageChange = (pageNumber) => {
        setActivePage( pageNumber )
    };

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
                { renderRows }
                <Pagination
                    activePage={ activePage }
                    itemsCountPerPage={ 4 }
                    totalItemsCount={ rows.length }
                    pageRangeDisplayed={ 3 }
                    onChange={ handlePageChange }
                    hideFirstLastPages="true"
                    nextPageText=">"
                    prevPageText="<"
                />
            </Container>
            <BackToTop/>
        <Footer/>
        </>
    )
}

export default ProductList