import React from 'react'
import { featuredProducts } from '../data.js'
import Card from 'react-bootstrap/Card';

export const FeaturedProducts = () => {
  return (
    <div className='container d-flex flex-wrap justify-content-evenly mw800 bg-custom gap-3 p-3'>
      {featuredProducts.map(prod =>
        <Card 
          className='text-center text-primary'
          key={prod.id}
          style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{prod.title}</Card.Title>
          </Card.Body>
          <Card.Img src={prod.thumbnail} />
        </Card>
      )}
    </div>
  )
}
