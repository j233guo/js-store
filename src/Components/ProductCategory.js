import {useState, useEffect} from 'react'
import {Card, CardDeck, Container} from 'react-bootstrap'

const ProductCategory = () => {

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
            const url="http://localhost:5000/categories";
            fetch(url).then((res) => {
                return res.json();
            }).then((json) => {
                setCategories(json.body)
            }).catch((err)=>{
                console.log("Encountered error: " + err);
            });
        }, []
    )

    return (
        <Container style={{marginTop: '5rem', marginBottom: "5rem"}}>
            <CardDeck>
                {categories.map((item) => (
                    <Card key={item.id}>
                        <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Img src={item.img}/>
                        <Card.Text> </Card.Text>
                        <Card.Link href={`/product-list/${item.name}`}>Shop {item.name}</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </CardDeck>
        </Container>
    )
}

export default ProductCategory
