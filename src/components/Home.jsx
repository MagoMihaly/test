import React from 'react'
import { FeaturedProducts } from './FeaturedProducts'

export const Home = () => {
  return (
    <>
      <header className='p-3 text-center'>
        <h1 className='text-primary'>Welcome to our Online Store</h1>
        <p className='text-secondary'>Discover our featured products and find the perfect items for you.</p>
      </header>
      <main className='container p-2'>
        <h2 className='text-primary'>Featured Products</h2>
        <div className="container">
          <FeaturedProducts />
        </div>
      </main>
      <footer className='text-center border-top'>
        <p>2023 Our Online Store. All rights reserved.</p>
      </footer>
    </>
  )
}