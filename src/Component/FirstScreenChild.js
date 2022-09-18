import React from 'react'

const FirstScreenChild = () => {
  return (
    <div>
        <div  className='TrackJob'>
        <p  className='fast'>The Fast Track to your Next  Job</p>
         <p className='stepPera' >We ensure your next step is a forward. That's why we build a job markeplace <br/> that cut-off the boring processes</p>
         </div>
        
         <div class="d-flex justify-content-between flex-wrap row-cnt">
         <div className='peraCreateOne'>
            <img src='../images/newMobile.png'  title='mobile'/>
            <h4>Create your account </h4>
            <p>Build your reputation with a universal <br/> profile that works across hundreds of <br/> different employers.</p>
         </div>
         <div className='peraCreateOne' >
         <img src='../images/newMobile.png'  title='mobile'/>
            <h4>Explore your options</h4>
            <p>Build your reputation with a universal<br/> profile that works across hundreds of<br/> different employers.</p>
         </div>
         <div className='peraCreateOne' >
         <img src='../images/newMobile.png'  title='mobile'/>
            <h4>Talk on your terms</h4>
            <p>Build your reputation with a universal<br/> profile that works across hundreds of <br/> different employers.</p>
         </div>
         </div>
         <div className='d-flex justify-content-between row-second' >
            <div className='peraCreateThree' >
                <h4>Newest Job Listings</h4>
                <p>Narrow down your applications and let the most appealing <br/> and matching companies show off</p>
                <p>All Categories ━━━━ Design ━━━━ Technology ━━━ Marketing</p>
            </div>
            <div>
                <button className='Listings' >View All Listings</button>
            </div>
         </div>
    </div>
    
  )
}

export default FirstScreenChild