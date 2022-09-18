import React from 'react'
import "../Component/index.css";
import icons from "../images/infoIcon.png";
import misLike from "../images/mislike.png";
import { Col, Navbar, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ring from '../images/ring.PNG';
import Form from 'react-bootstrap/Form';
import navicon from '../images/navicon.PNG';
import { Navigate, useNavigate } from 'react-router-dom';


const JobList = () => {
  const navigate = useNavigate()
  
  return (
    <div>
        <Navbar expand="lg" >
        <div className='container-fluid Navbr-Lets ' >
          <Navbar.Brand style={{backgroundColor:'#fff'}}>
            <img src="../images/LogoNew.png"  onClick={() => navigate("/") } style={{ height: '100%' }} />
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
       <div>
        <ul className='bread'  style={{ listStyle: 'none', display: 'flex' }}>
          <li className='b-home'>Home /</li>
          <li className='b-find'>Findjobs /</li>
          <li><span className='b-home'> Job Listings for </span><span className='b-find' > Graphic Designer </span></li>
        </ul>
      </div>
      <div className='Result' >
       <p>Job Search Results <img src={icons} title="" /> </p>
       <p><span className='numCount' >1 to 50 of 1,071 for </span> <span> "graphic designer"; </span> <span className='numCount' >USA</span></p>
      </div>

      <div class="d-flex justify-content-between R0w-e">
        <div>
           <div className='Designer'>
            <div className="Graphic" >
             <p className='Design-G' >Graphic Designer</p>
             <p className='DayAgo' >1 Day Ago</p>
             </div>
                 <button className='PercentJob' >100% Remote Job</button>
                 <button className='fullJob' >Full-Time</button>
                 <p className='Minimum' >Minimum 3+ years of work experience in graphic design. Works fluently in Adobe Photoshop, 
                     Illustrator, Google Workspace. Knowledge of branding, typography, color, and graphic 
                    principles. Must have a portfolio with a variety of work... See More</p>
           </div>
           <div className='Designer'>
            <div className="Graphic" >
             <p className='Design-G' >Graphic Designer</p>
             <p className='DayAgo' >1 Day Ago</p>
             </div>
                 <button className='PercentJob' >100% Remote Job</button>
                 <button className='fullJob' >Full-Time</button>
                 <p className='Minimum' >Minimum 3+ years of work experience in graphic design. Works fluently in Adobe Photoshop, 
                     Illustrator, Google Workspace. Knowledge of branding, typography, color, and graphic 
                    principles. Must have a portfolio with a variety of work... See More</p>
           </div>
           <div className='Designer'>
            <div className="Graphic" >
             <p className='Design-G' >Graphic Designer</p>
             <p className='DayAgo' >1 Day Ago</p>
             </div>
                 <button className='PercentJob' >100% Remote Job</button>
                 <button className='fullJob' >Full-Time</button>
                 <p className='Minimum' >Minimum 3+ years of work experience in graphic design. Works fluently in Adobe Photoshop, 
                     Illustrator, Google Workspace. Knowledge of branding, typography, color, and graphic 
                    principles. Must have a portfolio with a variety of work... See More</p>
           </div>
           <div className='See' >
            <button className='SeeMore' >See More</button>
           </div>
        </div>
        <div>
            
         <div className='RightDesigner' >
              <div className='detailDesign' >
              <p>Graphic Designer</p>
              <button>USA</button>
              </div>
              <div className='Tl-Grape-pera' >
                <button className='JobDl' >Job Detail</button>
                <p className='ful-l' >Full Job Description</p>
                <p className='experience' >We are looking for an experienced, creative graphic designer to work in our high-end clinic.
                   You would be responsible for all content creation and optimization (both offline and digital) within the 
                 lines of our company's style and as per its requirements.You need to have experience with the Adobe suite of application, particularly Photoshop, Lightroom and After Effects</p>
                 <p className='experience' >
                    Arabic writing is a plus but is not required. You need to be energetic, creative, motivated and have excellent English skills in both written and spoken 
                 </p>
                 <div>
                    <div className='flexWork' >
                  <p className='Remotely' >Work Remotely</p>
                  <p className='Type' >Job Type:</p>
                  </div>
                  <ul className='flexNew' >
                  <li className='Work' >No</li>
                  <li className='fullTime' >Full Time</li>
                  </ul>
                </div>
                <div className='ExperiencesET' >
                    <p className='NewExperience' >Experience:</p>
                    <ul className='yearDesign' >
                        <li className='Work' >Graphic designer: 2 years (Required)</li>
                        <li className='Work' >Illustrator/Lightroom/Photoshop: 2 years (Preferred)</li>
                    </ul>
                </div>
                <div>
                     <p className='NewExperience' >Requirements:</p>
                     <p>Strong SKill-Set on Tools</p>   
                </div>
                <div className='Adobe' >
                    <button>Adobe Photoshop</button>
                    <button>Adobe illustrator</button>
                    <button>Adobe XD</button>
                    </div>
              </div>
              <button className='activity' >Job activity</button>
              <div>
                <ul className='EmployerDays'  >
                    <li className='Work' >Employer reviewed job 5 days ago</li>
                    <li className='Work' >Posted 1 day ago</li>
                </ul>
                </div>
              <div className='lastFlex' >
              <button className='Report' ><span className='misLike' ><img src={misLike} /></span>Report Job</button>
              <button className='ApplyNow' >Apply Now</button>
                </div>
         </div> 
        </div>
      </div>

      


    </div>
  )
}

export default JobList