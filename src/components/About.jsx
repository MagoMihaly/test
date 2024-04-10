import React from 'react'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'

const About = () => {
  return (
    <section className='container p-3'>
      <div className="row">
        <div className="col-md-6 col-12">
          <h3>Welcome to Our Store!</h3>
          <div className="divider"></div>
          <p>
            We believe in bringing you the finest products with a touch of
            unique properties. Our mission is to provide you with main benefits
            or special features.
          </p>
          <h3>Our Story</h3>
          <div className="divider"></div>
          <p>
            Founded in 2010, Our Store has been a labor of love. We started  with
            a passion for products and a vision for a general objective or
            value. Over the years, we've expanded in the world.
          </p>
        </div>
        <div className="col-md-6 col-12">
          <img src={about2} alt="about" className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-12">
          <img src={about1} alt="about" className="img-fluid" />
        </div>
        <div className="col-md-6 col-12">
          <h3>What Sets Us Apart?</h3>
          <div className="divider"></div>
          <p>
            <strong>Quality Craftsmanship:</strong> Every product is crafted
            with precision and care to ensure quality and durability.
            
           
            <strong>Unique Designs:</strong> Discover categories that stand
            out with our exclusive designs.
            
           
            <strong>Customer Satisfaction:</strong> Your happiness is our
            priority. We strive to provide an exceptional shopping experience
            and top-notch customer service.
          </p>
          <h3>Connect With Us</h3>
          <div className="divider"></div>
          <p>
            Join our community on social media to stay updated on the latest
            news and promotions. Thank you for choosing Us.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About