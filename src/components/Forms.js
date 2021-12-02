import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios, { Axios } from 'axios';

export default function Forms() {

const url = "http://localhost:4000/create"
const [data, setData] = useState({
  country: "",
  cases : "",
  deaths : "",
  date : "",
  email : ""
})

function submit(e){
e.preventDefault();
axios.post(url, {
  country: data.country,
  cases : data.cases,
  deaths : data.deaths,
  date : data.date,
  email : data.email
})

}

function handle(e){
const newData = {...data}
newData[e.target.id] = e.target.value
setData(newData)
console.log(newData)
}



    return (
        <div className="coniner">
        <div className="formbox">
           <Form  onSubmit={(e) => submit(e)}>
               <h1>Covide 19 data form</h1>
  <Form.Group className="mb-3">
    <Form.Label>Country</Form.Label>
    <Form.Control onChange = {(e)=> handle(e)} id="country" value={data.country} type="text" placeholder="Enter Your Country" />
    
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Covid Cases</Form.Label>
    <Form.Control onChange = {(e)=> handle(e)} id="cases" value={data.cases}  type="number" placeholder="Number of Covid Cases" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Covid Deaths</Form.Label>
    <Form.Control onChange = {(e)=> handle(e)} id="deaths" value={data.deaths}  type="number" placeholder="Number of Covid Deaths" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Date of Entry</Form.Label>
    <Form.Control onChange = {(e)=> handle(e)} id="date" value={data.date}  type="Date" placeholder="Number of Covid Deaths" />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange = {(e)=> handle(e)} id="email" value={data.email}  type="email" placeholder="Enter email" />
  </Form.Group> 

  
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <br/><br/><br/><br/>
</Form>
        </div></div>
    )
}
