import React from 'react'
import {Card} from 'react-bootstrap'

const ProductListItems = (props) => {
    return (
        <Card>
            <Card.Img src={props.img}></Card.Img>
            <Card.Body>
            <a href={`/product/${props.id}`}><Card.Title>{props.title}</Card.Title></a>
            <Card.Text>${props.price}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProductListItems
