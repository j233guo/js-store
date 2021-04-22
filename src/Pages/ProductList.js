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

    // Pagination
    const rowsPerPage = 4;
    const indexOfLastRow  = activePage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = rows.slice( indexOfFirstRow, indexOfLastRow );

    const renderRows = currentRows.map((row, index) => {
        const productsCols = row.map((product) => {
            return (
                <Col xs="4" key={product.id}>
                    <ProductListItems key={product.id} id={product.id} title={product.title} price={product.price} img={product.img}/>	  
                </Col>
            );
        });
        return <Row key={index} style={{marginTop:"30px"}}>{productsCols}</Row>
    });

    const handlePageChange = (pageNumber) => {
        setActivePage( pageNumber )
    };

    useEffect(() => {
            let url;
            if (props.match.params.p === "bestseller") {
                url = "https://js-store-api.herokuapp.com/products/bestsellers";
            } else if (props.match.params.p === "all") {
                url = "https://js-store-api.herokuapp.com/products";
            } else {
                url = "https://js-store-api.herokuapp.com/products/category?c=" + props.match.params.p;
            }

            fetch(url).then((res) => {
                return res.json();
            }).then((json) => {
                setRows(chunk(json.body, 3));
                setTitle(json.message);
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