import React from 'react'
import { products } from '../data.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleProducts = () => {
  return (
    <div className="container shadow d-flex flex-wrap gap-3 justify-content-evenly p-3">
      {products.map(prod =>
        <Card
          key={prod.id}
          style={{ width: '18rem' }}>
          <Card.Img src={prod.thumbnail} alt='product' />
          <Card.Body>
            <Card.Title>
              {prod.title}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {prod.category}
            </Card.Subtitle>
            <Card.Text>
              {prod.description}
            </Card.Text>
            <p>Price : ${prod.price}</p>
          </Card.Body>
          <Button className='btn btn-primary w90 mx-auto mb-3'>Add to Cart</Button>
        </Card>
      )
      }
    </div>
  )
}

export default SingleProducts