import {useState, useEffect} from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Pagination from 'react-js-pagination'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ProductListItems from '../Components/ProductListItems'
import BackToTop from '../Components/BackToTop'

const SearchPage = (props) => {

    const [products, setProducts] = useState([]);
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
        if (props.match.params.name !== "All") {
            productList = productList.filter((product) => {
                return product.name.includes(props.match.params.name)
            })
        }
        if (props.match.params.category === "All") {
            setProducts(productList);
            setRows(chunk(productList, 3))
        } else {
            productList = productList.filter((product) => {
                return product.category === props.match.params.category
            })
            setProducts(productList)
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
        const url="https://js-store-api.herokuapp.com/products"
        fetch(url).then((res) => {
            return res.json();
        }).then((json) => {
            filterProduct(json.body);
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
                <h3 className={products.length === 0? "" : "hide"}>Sorry, no results found....</h3>
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

export default SearchPage
