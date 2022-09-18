import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./Header";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function PointForm() {
    const navigate = useNavigate();
    return(
        <>
        {/* <Header /> */}
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 px-5  ml-1 text-dark text-decoration-none">
        <img src="../images/LogoNew.png" title="logo" />
      </a>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><span class="nav-link px-3 link-secondary navListText " onClick={() => navigate("/")}  >Home</span></li>
        <li><span class="nav-link px-3 link-dark navListText" onClick={() => navigate("/job_Categories")} >Job Categories</span></li>
        <li><span  class="nav-link px-3 link-dark navListText" onClick={() => navigate("/company")}  >Company</span></li>
        <li><span  class="nav-link px-3 link-dark navListText"  onClick={() => navigate("/aboutUs")} >About Us</span></li>
      </ul>

      <div class="col-md-3 text-end px-5 ">
        <button type="button" class=" color-Yellow me-2 px-4">Login</button>
        <button type="button" class="color-btn px-4">Sign-up</button>
      </div>
    </header>
        <Container className="Main-content" >
        <Container style={{borderStyle:'solid',marginTop:'70px',height:'400px',backgroundColor:'white',color:'white'}}>
        <p style={{color:'#f4b08d'}}>Get In Touch</p>
        <Row>
            <Col>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control style={{backgroundColor:'#FDEFE8',color:'#f2a178'}}  type="text" placeholder="First Name" />
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control style={{backgroundColor:'#fadaca',color:'#f2a178'}} type="email" placeholder="Email" />
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control style={{backgroundColor:'#F4B494',color:'#f2a178',width:'208%'}} type="text" placeholder="Address" />
                    </Form.Group>       
                    </Form>   
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control style={{backgroundColor:'#E96320',color:'#ED824D',width:'208%',height:'80px'}} type="text" placeholder="Type Text here" />
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Button style={{color: 'white', backgroundColor: '#E96320',borderStyle:'none', padding:'20px', borderRadius:'30px', width:'80%',marginLeft:'67%'  }}  type="submit">Submit</Button>
                    
                    </Form.Group>
                    </Form>
            </Col>
            <Col>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control style={{backgroundColor:'#fdefe8',color:'#f2a178'}}  type="text" placeholder="Last Name" />
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control style={{backgroundColor:'#fadaca',color:'#f2a178'}} type="text" placeholder="Phone" />
                    </Form.Group>
                    </Form>

            </Col>

        
        </Row>

        </Container>

        </Container>

        </>
    )
    
}

export default PointForm;