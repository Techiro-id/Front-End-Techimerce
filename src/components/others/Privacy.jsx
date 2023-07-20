import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Privacy extends Component {
     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
      <h4 className="section-title-login">Privacy Page </h4>
      <p className="section-title-contact">
      Hi, I am Raul Ilma Rajasa, a highly motivated individual with a profound passion for Fullstack Software Development and Artificial Intelligence. 
      Throughout my journey, I have earned numerous accolades, including victories in various technology competitions and recognition as a winner in several startup competitions. 
      These achievements stand as a testament to my commitment and drive to excel in my field. With a growth mindset and a strong work ethic, 
      I constantly strive to push my boundaries and achieve new heights of success.
      </p>


                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default Privacy