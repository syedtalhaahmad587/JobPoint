import React from 'react';
import img1 from '../images/final.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFacebook , BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';




const Footer = () => {
  return (
    <>
    <Container fluid>
    <Row  className="col-header-text" style={{ marginTop: '80px' }}>
      <Col md={4}>
        <img src={img1} alt="" srcset="" />
      </Col>

      <Col md={2}>
        <h2>Home</h2>
      </Col>
      <Col md={2}>
        <h2>Company</h2>
        <p>Privacy Policy</p>
        <p>Cookies</p>
        <p>About us</p>
        <p>Contact us</p>
      </Col>
      <Col md={2}>
        <h2>Job Catogories</h2>
        <p>Design</p>
        <p>Development</p>
        <p>Social media</p>
      </Col>
      <Col md={2}>
        <h2>Contact Us</h2>
        <p>JobPoint@gmail.com</p>
        <p>+973 12345678</p>
        <p><span className='circleTag colorOne ' ><BsFacebook /></span><span className='circleTag colorTwo' ><BsInstagram /></span><span className='colorThree circleTag ' ><AiFillTwitterCircle /></span></p>
      </Col>
    </Row>
    <span className='lineFooter' > </span>
    <h4 className='footerImag' ><img src='../images/footerText.png' title='' /> </h4>
  </Container>

  </>
  )
}

export default Footer