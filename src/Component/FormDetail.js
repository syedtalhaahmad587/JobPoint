import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./Header";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function FormDetail() {
    const navigate = useNavigate();
    return (
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
            <div style={{ color: 'white', backgroundColor: '#ff5400',width:'100%' }}>
                <h1 className="JobSetDetail" >Job Details</h1>
            </div>

            <Container style={{marginTop:'50px'}}>
                <Row>
                    <Col>
                    <Form>
                    <Form.Group className="mb-3 JobListContent " controlId="formBasicEmail">
                    <Form.Label>Job Title *</Form.Label>
                    <Form.Control style={{backgroundColor:'#f3f3f3'}} type="text" placeholder="Enter Job Title" />
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3 JobListContent  " controlId="formBasicEmail">
                    <Form.Label>Job Type *</Form.Label>
                    <Form.Select style={{backgroundColor:'#f3f3f3'}}>
                    <option>Disabled select</option>
                    </Form.Select>
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3 JobListContent  " controlId="formBasicEmail">
                    <Form.Label>Company Name *</Form.Label>
                    <Form.Control style={{backgroundColor:'#f3f3f3'}} type="text" placeholder="Name" />
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3 JobListContent  " controlId="formBasicEmail">
                    <Form.Label>Company Size *</Form.Label>
                    <Form.Select style={{backgroundColor:'#f3f3f3'}}>
                    <option>20 to 49 Employees</option>
                    </Form.Select>
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3 JobListContent  " controlId="formBasicEmail">
                    <Form.Label>City *</Form.Label>
                    <Form.Control style={{backgroundColor:'#f3f3f3'}} type="text" placeholder="Los Angelis" />
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3 JobListContent  " controlId="formBasicEmail">
                    <Form.Label>State *</Form.Label>
                    <Form.Control style={{backgroundColor:'#f3f3f3'}} type="text" placeholder="caltonia" />
                    </Form.Group>
                    </Form>
                    </Col>
                    <Col>
                    <Form>
                    <Form.Group className="mb-3 JobListContent  " controlId="formBasicEmail">
                    <Form.Label>Job status *</Form.Label>
                    <Form.Select style={{backgroundColor:'#f3f3f3'}}>
                    <option>Full Time</option>
                    </Form.Select>
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3 JobListContent  " controlId="formBasicEmail">
                    <Form.Label>Company Industry *</Form.Label>
                    <Form.Select style={{backgroundColor:'#f3f3f3'}}>
                    <option>select</option>
                    </Form.Select>
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3 JobListContent  " controlId="formBasicEmail">
                    <Form.Label>Address *</Form.Label>
                    <Form.Control style={{backgroundColor:'#f3f3f3'}} type="email" placeholder="Email Address" />
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3 JobListContent  " controlId="formBasicEmail">
                    <Form.Label>Phone No *</Form.Label>
                    <Form.Control style={{backgroundColor:'#f3f3f3'}} type="number" placeholder="Enter Phone No" />
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3 JobListContent  " controlId="formBasicEmail">
                    <Form.Label>Zip Code *</Form.Label>
                    <Form.Control style={{backgroundColor:'#f3f3f3'}} type="number" placeholder="Enter Code" />
                    </Form.Group>
                    </Form>
                    <Form>
                    <Form.Group className="mb-3 JobListContent  " controlId="formBasicEmail">
                    <Button style={{color: 'white', backgroundColor: '#ff5400',borderStyle:'none',marginLeft:'60px',marginTop:'34px',width:'150px'}}  type="submit">Apply Now</Button>
                    </Form.Group>
                    </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )

}

export default FormDetail;