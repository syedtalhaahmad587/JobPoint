import React from 'react'
import { BiUserX , BiUser } from 'react-icons/bi';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { GiHandBag} from 'react-icons/gi';

const Profile = () => {
  return (
    <>
    <div class="d-flex justify-content-around flex-wrap ">
        <div className='profileImg' >
            <img src="../images/mobil.png" title="Profile"    />
        </div>
        <div className='sideTempo' >  
            <h4 className='employerSeat' >Perfect for Condidates <br /> Beautiful for Employers</h4>
            <div className='d-flex justify-content-between' >
            <div className='highProfileText ' >
                <span className='iconSvg' ><BiUserX /> </span> 
                <h4>Profile Highlights</h4>
                <p>Get highlights by the company <br /> that  you've been worked.</p>
            </div>
            <div className='highProfileText margin-r2' >
                <span className='iconSvg' ><GiHandBag /> </span> 
                <h4>carrer Booster </h4>
                <p>Boost your carrer journey fester <br /> that before</p>
            </div>
            </div>
            <div className='d-flex justify-content-between  ' >
            <div className='highProfileText margin-r ' >
                <span className='iconSvg' ><AiOutlineSafetyCertificate /> </span> 
                <h4>Interactive Assessment</h4>
                <p>Work on the interactive assessment <br />  given from company</p>
            </div>
            <div className='highProfileText' >
                <span className='iconSvg' ><BiUser /> </span> 
                <h4>Featured Profile</h4>
                <p>Being featured makes your profile <br /> stand out from others</p>
            </div>
            </div>
        </div>
    </div>
     
    </>
  )
}

export default Profile