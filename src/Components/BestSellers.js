import {useState, useEffect} from 'react'
import {Card, CardDeck, Container} from 'react-bootstrap'

const BestSellers = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url="http://localhost:5000/products/bestsellers";
        fetch(url).then((res) => {
            return res.json();
        }).then((json) => {
            setProducts(json.body)
        }).catch((err)=>{
            console.log("Encountered error: " + err);
        });
    }, []
)

    return (
        <Container style={{marginTop: '5rem', marginBottom: "10rem"}}>
            <Card>
                <Card.Header><b style={{marginRight:"20px"}}>Best Sellers</b> <a href="/product-list/bestseller">See All</a></Card.Header>
                <CardDeck>
                    {products.map((item) => (
                    <Card key={item.id}>
                        <Card.Body>
                        <a href={`/product/${item.id}`}><Card.Img src={item.img}/></a>
                        </Card.Body>
                    </Card>
                ))}
                </CardDeck>
            </Card>
        </Container>
    )
}

export default BestSellers
