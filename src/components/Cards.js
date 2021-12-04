import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import Confirmed from '../images/confirmed.png';
import Critical from '../images/critical.png';
import Recovered from '../images/recovered.png';
import Death from '../images/death.png';

export default function Cards(props) {
  const { covid19 } = props;


  return (
    <Container>
      <h1 className="result">{covid19.country} Covid-19 Live Data </h1>
      <Row >
        <Col >
          <Card>
            <Card.Img variant="top" src={Confirmed} />
            <Card.Body>
              <Card.Title>Confirmed</Card.Title>
              <Card.Title>
                {covid19.provinces.map(items => (items.confirmed))}
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={Recovered} />
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Title>
                {covid19.provinces.map(items => (items.recovered))}
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={Critical} />
            <Card.Body>
              <Card.Title>Active</Card.Title>
              <Card.Title>
                {covid19.provinces.map(items => (items.active))}
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={Death} />
            <Card.Body>
              <Card.Title>Deaths</Card.Title>
              <Card.Title>
                {covid19.provinces.map(items => (items.deaths))}
              </Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  )
}
