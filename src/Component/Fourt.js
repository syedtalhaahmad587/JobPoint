import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function Fourth(params) {
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
        <li><span class="nav-link px-3 link-dark navListText" onClick={() => navigate("/job_Categories")} >Job Categories</span></li>
        <li><span  class="nav-link px-3 link-dark navListText" onClick={() => navigate("/company")}  >Company</span></li>
        <li><span  class="nav-link px-3 link-dark navListText">About Us</span></li>
      </ul>

      <div class="col-md-3 text-end px-5 ">
        <button type="button" class=" color-Yellow me-2 px-4">Login</button>
        <button type="button" class="color-btn px-4">Sign-up</button>
      </div>
    </header>
            <Container>
                <h4>JOBPoint Privacy Policy</h4>
                <h5>Your Privacy Matters</h5>
                <p>This statement sets forth our Privacy Policy and practices that apply to the data we collect, process and use via our JobPoint.me website, emails we send and our mobile applications.
                    Our paid users (“Subscribers”) share their professional identities, engage and share with Employers, view and post relevant content, and learn and search for career opportunities.
                    Content and data on some of our services are viewable to non-Subscribers (“Visitors”).

                    <br />
                    <br />


                    Job-Point’ mission is to offer Job Seekers job listings, content, and resources that assist them in finding remote, part-time, freelance, flexible, or alternative jobs, as well as to help Employers
                    find qualified candidates for recruiting and human resources needs. A core element of this mission is our commitment to protect your personal information and to be transparent about
                    the data we collect about you, how it is used, and with whom it is shared.

                    <br />
                    <br />

                    Job-Point is an Internet-based service which you can access using a computer or mobile device. When you do, we collect and process personal information depending on your activity.
                    This Privacy Policy explains how we process certain data we collect from you.</p>

                <br />
                <br />

                <h6>We Want you to know the types of informtion we collect</h6>
                <br />

                <p>We collect information when you visit our Website and/or provide feedback to us, request information, respond to our questions/surveys, or enter our contests.</p>
                <p>The personal data we collect and process may include your IP address, first and last name, geo-location, including your postal and email addresses, your telephone number,
                    your job title, your areas of interest, reasons for your interest in our services, as well as information as to the type of relationship that exists between us. If you provide us with your
                    social media details, we may retrieve publicly available information about you from social media. We also gather data about the length of time you spend on our Website, the pages clicked,
                    and information about your computer, such as your browser type, referring/exit pages, and operating system.

                    <br />
                    <br />
                    If you subscribe to our services (Subscriber) or choose to participate in surveys or enter contests, you may provide and we may collect and process additional information as it relates to
                    your resume profile (such as your job history, employment details, education, qualifications, skills, work preferences, and home office technology) or demographic information
                    (such as gender, age, lifestyle and social circumstances, marital status, number of children, and reasons for wanting or needing work flexibility).

                    <br />
                    <br />

                    We collect and process sensitive information only with your consent or if required by applicable law. This includes information about your religious beliefs, race or ethnicity, political opinions,
                    trade union memberships, or health and sexual details.
                    <br />
                    <br />

                    If you provide personal information about others, or if others give us your information, we will only use that information for the specific reason for which it was provided to us
                    (such as to purchase a Gift Certificate or use our "Refer a Friend" functionality).
                    <br />
                    <br />

                    We use various technologies to collect and store information and to enable features and provide you with personalized content, including cookies, pixel tags, browser web storage,
                    application data caches, databases, and server logs.

                    <br />
                    <br />

                    Our Services are not intended for use by individuals who are not of legal working age. Legal working age levels vary by country. Please see our Terms of Use for more information.</p>
                <br />
                <br />
                <h6>Here's how and why we use your informion</h6>
                <br />
                <p>We use the data we collect from you to provide, maintain, and improve our services and to develop new services. We use the data to communicate with you, customize content for you,
                    show you related job opportunities, and suggest resources or savings offers that might be of interest. We use data for analytics and measurement to understand
                    and improve how our services are used.</p>
                <br />
                <br />
                <p>If you are a Subscriber, we may use your information to:</p>
                <p>Fulfill your subscription.</p>
                <p>Send you an order confirmation.</p>
                <p>Respond to your requests, questions, and concerns.</p>
                <p>Administer your account.</p>
                <p>Invoice and collect from you amounts you have agreed to pay us</p>
                <p>Enable you to post your resume, search job postings, and contact or be contacted by prospective Employers.</p>
                <p>Suggest related resources.</p>
                <p>By showing interest in a job or by replying to a message from a potential Employer, you agree to the disclosure of your personal information as shown in your resume profile and application
                    to that Employer and recognize that such party and not FlexJobs is responsible for its collection and processing of such information. By our terms and conditions, potential Employers agree
                    to comply with all their responsibilities under applicable data protection rules with respect to the collection, processing, and storage of your personal data, as well as providing adequate
                    protection of all data subject rights provided for under all applicable data protection rules.
                    <br />
                    <br />

                    If you enter credit card information in connection with a purchase from us, that information is sent to the third-party service provider we use to manage credit card processing and is not
                    stored on our servers. The service provider is not permitted to use your credit card information except for the sole purpose of credit card processing on our behalf.
                    <br />
                    <br />

                    We use information to help detect, prevent, and respond to fraud, abuse, security risks, and technical issues that could harm us, our users, or the public. We analyze your information to help us
                    detect abuse such as spam, malware, and illegal content.
                    <br />
                    <br />

                    We’ll ask for your consent before using your information for a purpose that isn’t covered in this Privacy Policy.</p>
                <h6>We may collect information from third party Websites that you visit.</h6>
                <p>Our Website provides links that you can follow to other sites that do not belong to us. These include the Websites of companies who may be seeking flexible workers. We are not responsible for
                    the content or privacy policy of these other Websites or entities. If you choose to interact with any such third party, we may receive information about you from that third party.
                    We use the information we receive from third parties in accordance with this Privacy Policy.</p>
                <h6>When we share your information.</h6>
                <p>As provided elsewhere in the Privacy Policy, we do not share your personal information with third parties except in the following cases:</p>
                <p>With your consent. We’ll get your permission before sharing your information with a third party Website or service. We use data we have about you (such as your expressed interests and preferences)
                    to determine whether you might be interested in the opportunities, products, or services of a particular partner. We’ll ask for your explicit consent to share any sensitive personal information.
                    <br />
                    <br />

                    For external processing. We provide personal information to certain trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Policy and any
                    other appropriate confidentiality and security measures. For example, we use service providers to help us with customer support, billing processes, Web hosting (including Cloud) services,
                    data analysis or storage, fraud protection, marketing assistance, and customer service.
                    <br />
                    <br />

                    For advertising effectiveness. We may provide information collected as described in this Privacy Notice to reputable third-party advertising services in order to help deliver tailored advertising.
                    Some of these services use technologies that may track your activities across time and services for purposes of associating the different devices you use, and delivering relevant ads
                    and/or other content to you.</p>
                <br />
                <br />

                <p>For legal reasons. We will share personal information outside of FlexJobs if we have a good-faith belief that access, use, preservation, or disclosure of the information is reasonably necessary to:</p>
                <p>Meet applicable law, legal process, or government request</p>
                <p>Enforce our Terms of Service, including investigating potential violations</p>
                <p>Detect, prevent, or otherwise address fraud, security, or technical issues</p>
                <p>Protect against harm to the rights, property, or safety of FlexJobs, our users, or the public as required or permitted by law</p>
                <p>We may share non-personally identifiable information publicly and with our partners, such as potential Employers. In rare cases, we may also allow them to collect information from your browser
                    or device for advertising and measurement purposes using their own cookies or similar technologies.</p>
                <br />
                <br />

                <p>If FlexJobs is involved in a merger, acquisition, or sale of assets, we’ll continue to ensure the confidentiality of your personal information and give affected users notice before personal information
                    is transferred or becomes subject to a different privacy policy.</p>
                <br />
                <br />

                <h6>We build security into our services to protect your information.</h6>
                <p>Our services and products are built with strong security features that continuously protect your information. The insights we gain from maintaining our services help us detect and automatically
                    block security threats from ever reaching you. And if we do detect something risky that we think you should know about, we’ll notify you and help guide you through steps to stay
                    better protected.
                    <br />
                    <br />
                    We work hard to protect you and us from unauthorized access, alteration, disclosure, or destruction of information we hold. We use encryption to keep your data private while in transit.
                    We review our information collection, storage, and processing practices, including physical security measures, to prevent unauthorized access to our systems and we restrict
                    access to personal information to JobPoint’ employees, contractors, and agents who need that information in order to process it. Anyone with this access is subject to strict contractual
                    confidentiality obligations and may be disciplined or terminated if they fail to meet these obligations.
                    <br />
                    <br />

                    One of the critical ways we protect your privacy and security is for you to follow our Site prompts and only enter your personal information in fields in which you are explicitly instructed to do so,
                    such as a Name, Email, Address, or Credit Card field. This allows us to correctly label the personally-identifiable information and differentiate it from non-personally identifiable information.

                    <br />
                    <br />
                    We may store your work profile and information.
                    As a Subscriber, you may store in our database your work profile, which includes your resume, cover letters, and/or work samples. Your profile is completely hidden from the public,
                    and only Employers who are logged in will be able to search your entire resume profile, including your personal contact information.
                    <br />
                    <br />

                    You may remove your resume on JobPoint or delete your profile on JobPoint at any time, and it will no longer be available on the FlexJobs services. If you desire that Employers who have
                    had access to your profile in our database delete their copies, you will need to contact and request that they do so. Such party’s privacy policy applies to the services provided and information
                    processed by them. We are not responsible for their use or privacy of your information.

                    <br />
                    <br />

                    Posting to Public Areas of Job-Point

                    <br />
                    <br />
                    If you post any of your personal information in public areas of JobPoint, such as in comments on a blog, such information may be collected and used by others over whom we have no control.
                    We are not responsible for the use made by third parties of information you post or otherwise make available in public areas of JobPoint.
                    <br />
                    <br />

                    Access to and Modification of Your Information
                    <br />
                    <br />
                    You may review, correct, update, or change your JobPoint account at any time. From your JobPoint account, you may also opt-out of receiving newsletters and certain other
                    information from JobPoint.

                    <br />
                    <br />
                    To change your JobPoint account information, log into your account, go to Account Settings, review your account information and, if you wish, edit it with the options provided.
                    Through Account Settings, you can also cancel your account at any time.

                    <br />
                    If you close your JobPoint account, your profile will no longer be accessible on JobPoint.
                    <br />
                    <br />
                    You may decline to share certain information with us, in which case we may not be able to provide some of the features and functionality of our services. These rights include,
                    in accordance with applicable law, the right to object to or request the restriction of processing of your information and to request access to, rectification, erasure, and portability
                    of your own information. Where we process your information on the basis of your consent, you have the right to withdraw that consent (noting that such withdrawal does not affect
                    the lawfulness of any processing performed prior to the date on which we receive notice of such withdrawal, and does not prevent the processing of your personal information in reliance
                    upon any other available legal bases). Requests should be submitted by contacting us (using the contact instructions below).</p>
                <p>The information that we collect, process, and/or use is controlled by JobPoint Corporation. The privacy protections and the rights of authorities to access your information in the United States
                    might not be the same as in your home country.
                    <br />
                    <br />

                    The California Consumer Privacy Act (CCPA) provides California residents with certain rights regarding our collection, use, and sharing of your personal information. In addition to our
                    privacy policies outlined above, you may contact us to submit a data rights request to know what personal information has been collected about you in the past 12 months and with whom it has
                    been shared, and to access that information and request that it be deleted, free of charge.
                    <br />
                    <br />

                    The European General Data Protection Regulation (GDPR) provides residents of the European Economic Area (EEA) certain rights. In addition to our privacy policies outlined above,
                    EU citizens and residents of the EEA. may contact us to submit a data rights request to know what personal information has been collected and to access that information. JobPoint and the
                    services it provides are hosted and provided outside of the EEA, including in the United States, for the purposes described in this policy.</p>
                <br />
                <br />

                <h6>Changes to Privacy Statement</h6>
                <p>We change our Privacy Policy from time to time. We will not reduce your rights under this Privacy Policy without your consent. We always indicate the date the last changes were published.
                    If we change our Privacy Statement significantly, we will provide a prominent notice on the Website. For certain services, we may provide you with email notification of our
                    Privacy Policy changes.</p>
                <br />
                <br />
                <h6>Contact Information</h6>
                <p>You can contact us about our Privacy Policy by:</p>
                <p>Phone: 123-456-7890,</p>
                <p>Mail: JobPoint Corporation, 4845 Pearl East Circle Suite 101 #23790, Boulder, CO, 80301-6113,</p>
                <p>Or via our Contact page.</p>
            </Container>
        </>

    )

}

export default Fourth;