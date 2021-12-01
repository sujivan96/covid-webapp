import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Forms() {
    return (
        <div className="coniner">
        <div className="formbox">
           <Form>
               <h1>hh sss</h1>
  <Form.Group className="mb-3">
    <Form.Label>Country</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Country" />
    
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Covid Cases</Form.Label>
    <Form.Control type="number" placeholder="Number of Covid Cases" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Covid Deaths</Form.Label>
    <Form.Control type="number" placeholder="Number of Covid Deaths" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Date of Entry</Form.Label>
    <Form.Control type="Date" placeholder="Number of Covid Deaths" />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group> 

  
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <br/><br/><br/><br/>
</Form>
        </div></div>
    )
}
