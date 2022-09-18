import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Navbar, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from '../images/LogoNew.png';
import owner from '../images/Owner.PNG';
import ring from '../images/ring.PNG';
import navicon from '../images/navicon.PNG';
import "./ThirdScreen.css";
import { Navigate, useNavigate } from 'react-router-dom';

const ThirdScreen = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar expand="lg" >
        <div className='container-fluid Navbr-Lets ' >
          <Navbar.Brand  style={{backgroundColor:'#fff'}}>
            <img src="../images/LogoNew.png"  onClick={() => navigate("/") }  style={{ height: '100%' }} />
          </Navbar.Brand>
          <div style={{
          backgroundColor: '#FF5400',
          boxShadow: ' 0px 11px 8px -6px rgba(0,0,0,0.79)',
          marginBottom: '10px',
          width:'100%',
          height:'100px'
        }}>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className='collapse-Nav' id="navbarScroll" >
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Graphic Designer"
              className="me-2"
              aria-label="Search"
              style={{
                height:'60px',
                width:'300px',
                marginLeft:'30px',
                marginTop:'20px'
              }}
            />
            <Form.Control
              type="search"
              placeholder="Location"
              className="me-2"
              aria-label="Search"
              style={{
                height:'60px',
                width:'300px',
                marginLeft:'30px',
                marginTop:'20px'
              }}
            />
            <Button
              style={{
                marginLeft:'30px',
                height:'60px',
                width: '150px',
                backgroundColor: '#e96320',
                color: '#fff',
                outlineColor: '#e96320',
                borderColor: '#fff',
                marginTop:'20px'
              }}
            >
              Search Now
            </Button>
          </Form>
          
            <img src={navicon} alt="" title=''/>
          </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
      <Container fluid>
        <Row>
          <Col md={1}></Col>
          <Col
            md={8}
            style={{
              backgroundColor: '#FF5400',
              color: '#fff',
              padding: '50px',
              borderRadius: '10px',
            }}
          >
            <h1 style={{ paddingBottom: '50px' }}>Graphic Designer</h1>
            <h2 style={{ paddingBottom: '30px' }}>
              CareerUp, Inc. Sydney, New South Wales, Australia
            </h2>
            <p style={{ paddingBottom: '20px', color:'#fff' }}>
              CareerUp, inc. Sydney, New south Wakes, Australia
            </p>
            <p style={{ paddingBottom: '100px',color:'#fff' }}>
              11-50 employees - stuffing and Recruiting
            </p>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      <Container fluid style={{ marginTop: '80px' }}>
        <Row>
          <Col md={1}></Col>

          <Col
            md={8}
            style={{
              backgroundColor: '#F6F6F6',
              padding: '50px',
              borderRadius: '10px',
            }}
          >
            <h1>Meet the Company Owner For meetup</h1>
            <div className='wolfman' >
                <div>
              <img src={owner} alt="" srcset="" />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: '50px',
                }}
              >
                <h2>Allan Wolfman</h2>
                <p>CEO</p>
              </div>
              <div
              className='MessageParent'
                style={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  // padding: '50px',
                }}
              >
                <button
                  style={{
                    padding: '10px',
                    borderRadius: '60px',
                    width: '250px',
                    height: '50px',
                  }}
                >
                  <h5>Message Now</h5>
                </button>
              </div>
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col md={1}></Col>
          <Col
            md={8}
            style={{
              backgroundColor: '#F6F6F6',
              padding: '30px',
              borderRadius: '10px',
              marginTop: '80px',
            }}
          >
            <h2>About the job</h2>
            <p>
              Are you looking for the perfect internship to launch your career?
              careerup has partnered with <br></br> Fortune 500 companies,
              VC-backed startups, and leading regional business to help them
              recruit <br />
              talented college students and young professionals like you{' '}
            </p>
            <p style={{ paddingTop: '40px' }}>
              CareerUp is one of the yop internship placement organization in
              the world and has helped 1,000's <br />
              of interns find their best internship. See why U-Penn, the
              university of california and many others <br />
              have recomended our program
            </p>
            <p style={{ paddingTop: '40px' }}>
              Submit a free 1-minute application today to see which internship
              positions you get match with
            </p>
            <p style={{ paddingTop: '40px', paddingBottom: '40px' }}>
              Student Internship Opening
            </p>
            <p>
              Finance
              <br />
              Marketing and PR
              <br />
              Business Development
              <br />
              Software Engineering
              <br />
              Banking and Investment
              <br />
              Accounting
            </p>

            <p style={{ paddingTop: '20px', paddingBottom: '40px' }}>
              Companies We've Worked with
            </p>
            <p>
              Amazon
              <br />
              Tesla
              <br />
              General Electric
              <br />
              Microsoft
              <br />
              Baker and McKenzie
            </p>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col md={1}></Col>
          <Col
            md={8}
            style={{
              marginTop: '80px',
              backgroundColor: '#F6F6F6',
              padding: '30px',
              borderRadius: '10px',
            }}
          >
            <div className='AboutText' >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: '50px',
                }}
              >
                <h2>Set alert for similar job</h2>
                <p style={{ fontSize: '20px' }}>
                  Job, CareerUp, Inc. Sydney, New South Wales, Australia
                </p>
              </div>
              <div
              className='Sydney'
              >
                <img
                  src={ring}
                  alt=""
                  srcset=""
                  style={{
                    padding: '10px',
                    borderRadius: '60px',
                    width: '100px',
                    height: '100px',
                  }}
                />
              </div>
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col md={1}></Col>
          <Col
            md={8}
            style={{
              backgroundColor: '#F6F6F6',
              borderRadius: '10px',
              padding: '40px',
              marginTop:'80px'
            }}
          >
            <h3 style={{padding:'30px'}}>About The Company</h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p style={{fontSize:'20px'}}>
                Staffing and recruiting 11-50 employees 99 on linkedinHundreds
                of coperate partners
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p style={{fontSize:'20px'}}>
                Thousand of alumni. Professional Career Coaches. Specialized
                internship recruiters.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p style={{fontSize:'20px'}}>In demand skils training. Let's launch your career today</p>

            </div>
            <button
                  style={{
                    padding: '10px',
                    borderRadius: '60px',
                    width: '150px',
                    height: '50px',
                    borderColor:'#6E6E6E',
                    color:'#6E6E6E',
                    float:"right"
                  }}
                >
                  <p >follow us</p>
                </button>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
            <Col><h4 className='Similar' >See More Similar Jobs</h4></Col>
            <Col>
            <button style={{
                width: '150px',
                backgroundColor: '#e96320',
                color: 'white',
                border:'none',
                borderRadius:'60px',
                padding:'10px',
                borderColor:'#e96320',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                marginTop:'100px'

              }}>See More</button>
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThirdScreen;
