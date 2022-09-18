import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "../Component/index.css";
import Navbar from 'react-bootstrap/Navbar';
import FirstScreenChild from './FirstScreenChild';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import CartSlider from './CartSlider';
import Profile from './Profile';
import JobSearch from './JobSearch';
import { BsSlack  , BsMicrosoft } from 'react-icons/bs';
import Modal from './ModalGrocery/Modal';
import JobCategories from './JobCategories';

function FirstScreen() {
  const navigate = useNavigate()
  return (
   <>
   {/* <Header/> */}
   <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 px-5  ml-1 text-dark text-decoration-none">
        <img src="../images/LogoNew.png" title="logo" />
      </a>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><span class="nav-link px-3 link-secondary navListText " onClick={() => navigate("/")}  >Home</span></li>
        <li><span class="nav-link px-3 link-dark navListText" onClick={() => navigate("job_Categories")} >Job Categories</span></li>
        <li><span  class="nav-link px-3 link-dark navListText" onClick={() => navigate("company")}  >Company</span></li>
        <li><span  class="nav-link px-3 link-dark navListText"  onClick={() => navigate("aboutUs")} >About Us</span></li>
      </ul>

      <div class="col-md-3 text-end px-5 ">
        <button type="button" class=" color-Yellow me-2 px-4"  >Login</button>
        <button type="button" class="color-btn px-4">Sign-up</button>
      </div>
    </header>
   <div class="fluid-container">
    <section className='sectionFix' > 
    
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4  col-md-12" > 
        <div className='col-md-7'  >
          <p className='Certified'>100% Certified PlatForm</p>
          <p className='skilled'>  Find a skilled Person <br/> to do the job</p>
          <p className='Creative'>Creative People Let;s you find the right job for any <br/> challenge from development to a marketing</p>
          <div className='d-flex flex-wrap align-items-center'>
          <Navbar expand="lg" >
        <div className=' ' >
          <div style={{
         
        }}>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className='collapse-Nav' id="navbarScroll" >
            <Form className="d-flex  flex-wrap">
            <Form.Control
              type="search"
              placeholder="Graphic Designer"
              className="me-2"
              aria-label="Search"
              style={{
                height:'60px',
                width:'250px',
                marginLeft:'0px',
                marginTop:'0px',
                background: "#f9fafb",
                marginBottom:"12px",
              }}
            />
            <Form.Control
              type="search"
              placeholder="Location"
              className="me-2 formOneControl"
              aria-label="Search"
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
                marginBottom:"12px",
                
              }}
            >
              Search Now
            </Button>
          </Form>
          </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
            <div className='Popular' >
            <h5>
              Popular Categories :
            </h5>
            </div>
            <div className='UxDeSign d-flex flex-wrap align-items-center ' >
              <p  >UX Designer</p>
              <p>Back and Dev</p>
              <p> Front and Dev</p>
            </div>
          </div>
        </div>
        <div className='col-md-5 Wt'>
        <img src="../images/logo.png" title="logo"  />
        </div>
        </div>
    </section>
    <section className='align-items-center fixTrMargin '  >
      <div className='trusted  flex-wrap align-items-center text-center'>
          <h4>trusted parterners</h4>
          <div className='d-flex flex-wrap align-items-center social  justify-content-md-center Social ' >
          <p>facebook</p>
          <p><span className='micro' ><BsSlack /></span>slack</p>
          <p>Google</p>
          <p><span className='micro'><BsMicrosoft /></span>Microsoft</p>  
          </div>
      </div>
    </section>
    <section>
    <p  className='demand'>Most Demanded Job Categories</p>
       <JobCategories />
    </section>
    <section>
      <FirstScreenChild />
    </section>
    <section>
      {/* <CartSlider /> */}
      <Modal />
    </section>
    <section className='section-spacing' >
       <Profile />
    </section>
    <section>
      <JobSearch />
    </section>
  </div>
   </>
  );
}

export default FirstScreen;