import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'


export class Contact extends Component {
     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                    <Row className="text-center">
             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
     <Form className="onboardForm">
          <h4 className="section-title-login">CONTACT WITH US </h4>
          <h6 className="section-sub-title">Please Contact With Us </h6>
          <input className="form-control m-2" type="text" placeholder="Enter Mobile Number" />

          <input className="form-control m-2" type="email" placeholder="Enter Email" />

          <input className="form-control m-2" type="text" placeholder="Enter Your Message" />
          <Button className="btn btn-block m-2 site-btn-login"> Send </Button>

     </Form>


                         </Col>

            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                 <br></br><br></br>
           <p className="section-title-contact">
            Subdirektorat Pengembangan Kewirausahaan dan Karir Gedung SAC, Kampus ITS Sukolilo, Surabaya 601111
            Email: techiro.indo@gmail.com
            Phone Number: +62 – 812 5187 4796
           </p>

           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6241661006948!2d112.78928467627354!3d-7.283532173962425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa13477e673f%3A0xac6e841e6e3b3a93!2sSAC%20ITS!5e0!3m2!1sen!2stw!4v1689873182655!5m2!1sen!2stw" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>

                         </Col>
                    </Row>






                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default Contact