import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import swal from 'sweetalert'
import ReCAPTCHA from 'react-google-recaptcha';
import postApi from '../api/postApi';

export default function Forms() {


  //const url = "http://localhost:4000/create"
  const [disable, setDisable] = useState(true);
  const [data, setData] = useState({
    country: "",
    cases: "",
    deaths: "",
    date: "",
    email: ""
  })

  function onChange(value) {

    console.log("Captcha Value:", value);

  }

  function submit(e) {
    e.preventDefault();
    postApi.post("/", {
      country: data.country,
      cases: data.cases,
      deaths: data.deaths,
      date: data.date,
      email: data.email
    })
      .then(res => {
        swal("Data Inserted", "Thank You", "success");
      })
      .catch(err => {
        swal("Error", "please try again", "error");
      })




  }

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }





  return (
    <div className="coniner">
      <div className="formbox">
        <Form onSubmit={(e) => submit(e)}>
          <h1>Covide 19 data form</h1>

          <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Control onChange={(e) => handle(e)} id="country" value={data.country} type="text" placeholder="Enter Your Country" required />

          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Covid Cases</Form.Label>
            <Form.Control onChange={(e) => handle(e)} id="cases" value={data.cases} type="number" min="0" placeholder="Number of Covid Cases" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Covid Deaths</Form.Label>
            <Form.Control onChange={(e) => handle(e)} id="deaths" value={data.deaths} type="number" min="0" placeholder="Number of Covid Deaths" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date of Entry</Form.Label>
            <Form.Control onChange={(e) => handle(e)} id="date" value={data.date} type="Date" placeholder="Number of Covid Deaths" required />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => handle(e)} id="email" value={data.email} type="email" placeholder="Enter email" required />
          </Form.Group>

          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange => setDisable(false)}
          />,
          <br />
          <Button disabled={disable} type="submit" >
            Submit
          </Button>

          <br /><br /><br />
        </Form>

      </div></div>
  )
}
