import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from '../images/infofree.PNG';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import img2 from '../images/new.PNG';
import { BsCardText, BsCheck2 } from 'react-icons/bs';
import { BiBarChartAlt } from 'react-icons/bi';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';
import JobCategories from './JobCategories';
import Header from './Header';

const Landing = () => {
    const navigate = useNavigate()
  return (
    <>
    {/* <Header /> */}
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 px-5  ml-1 text-dark text-decoration-none">
        <img src="../images/LogoNew.png" title="logo" />
      </a>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><span class="nav-link px-3 link-secondary navListText " onClick={() => navigate("/")}  >Home</span></li>
        <li><span class="nav-link px-3 link-dark navListText" >Job Categories</span></li>
        <li><span  class="nav-link px-3 link-dark navListText" onClick={() => navigate("/company")}  >Company</span></li>
        <li><span  class="nav-link px-3 link-dark navListText"  onClick={() => navigate("/aboutUs")} >About Us</span></li>
      </ul>

      <div class="col-md-3 text-end px-5 ">
        <button type="button" class=" color-Yellow me-2 px-4">Login</button>
        <button type="button" class="color-btn px-4">Sign-up</button>
      </div>
    </header>
      <div>
        <ul className='bread'  style={{ listStyle: 'none', display: 'flex' }}>
          <li className='b-home' >Home /</li>
          <li className='b-find' > Findjobs</li>
        </ul>
      </div>

      <div className="ContainColor"   style={{ backgroundColor: '#f8f8f8' }}  >
        <Row>
          <Col md={8} className="Col-w" >
            {' '}
            <p   style={{ color: '#e96320', fontSize: '1.8em' }}>
              Find Remote Work From Home and Flexible Jobs.{' '}
            </p>
            <ul style={{ listStyle: 'none', marginTop: '20px' }}>
              <li style={{ paddingBottom: '25px' }}>
                <BsCheck2 />
                100% Hand-screened, high-quality jobs
              </li>

              <li style={{ paddingBottom: '25px' }}>
                <BsCheck2 />
                Entry-Level to execugtive roles
              </li>

              <li style={{ paddingBottom: '25px' }}>
                <BsCheck2 />
                50 + carrer categories
              </li>

              <li style={{ paddingBottom: '25px' }}>
                <BsCheck2 />
                No ads,junks, or scams
              </li>

              <li style={{ paddingBottom: '25px' }}>
                <BsCheck2 />
                Experts in remote and flexible work since 2020
              </li>
            </ul>
          </Col>
          <Col md={4} >
            {' '}
            <img
            className='img2'
              src={img1}
              title="imagetext"
            />
          </Col>
        </Row>
      </div>
       <h1 className='demand' >Top Categories</h1>
      <section>
      <JobCategories />
      </section>
        <h1 className='demand' >Top All Categories</h1>
         
          <div className='d-flex flex-wrap align-items-center justify-content-md-center mx-4  '>
        <Row className="col-text" >
          <Col md={4}  >
          <p>Accoint Managment jobs</p>
          <p>Expand/collapse</p>
          <p>Accounting and Finance jobs</p>
          <p>Expand/collapse</p>
          <p>Administrative Jobs</p>
          <p>Expand/collapse</p>
          <p>Advertising & PR jobs</p>
          <p>Expand/collapse</p>
          <p>Animals and Wildlife Jobs</p>
          <p>Art & creative jobs</p>
          </Col>
          <Col md={4}>
          <p>Expand/collapse</p>
          <p>Bilingual Jobs</p>
          <p>Expand/collapse</p>
          <p>Business Development Jobs</p>
          <p>Call centre jobs</p>
          <p>Expand/collapse</p>
          <p>Communication jobs</p>
          <p>Computer and IT jobs</p>
          <p>Expand/collapse</p>

          <p>Computing jobs </p>
          </Col>
          <Col md={4}>
          <p>Expand/collapse</p>
          <p>Bilingual Jobs</p>
          <p>Expand/collapse</p>
          <p>Business Development Jobs</p>
          <p>Call centre jobs</p>
          <p>Expand/collapse</p>
          <p>Communication jobs</p>
          <p>Computer and IT jobs</p>
          <p>Expand/collapse</p>
          <p>Computing jobs </p></Col>
        </Row>
        </div>
    </>
  );
};

export default Landing;
