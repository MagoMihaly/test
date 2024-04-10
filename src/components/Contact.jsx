import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      feedback,
      timestamp : new Date()
    }
    console.log(formData);
  }
  
  return (
    <section className='container p-3'>
      <h3>Provide Feedback</h3>
      <div className='container'>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Feedback</Form.Label>
            <Form.Control as="textarea" rows={3} value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </Form.Group>
          <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
        </Form>
      </div>
    </section>
  )
}

