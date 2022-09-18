import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
  return (
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 px-5  ml-1 text-dark text-decoration-none">
        <img src="../images/LogoNew.png" title="logo" />
      </a>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><span class="nav-link px-3 link-secondary navListText " onClick={() => navigate("/")}  >Home</span></li>
        <li><span class="nav-link px-3 link-dark navListText" onClick={() => navigate("feature")} >Job Categories</span></li>
        <li><span  class="nav-link px-3 link-dark navListText" onClick={() => navigate("company")}  >Company</span></li>
        <li><span  class="nav-link px-3 link-dark navListText"  onClick={() => navigate("privacyPolicy")} >About Us</span></li>
      </ul>

      <div class="col-md-3 text-end px-5 ">
        <button type="button" class=" color-Yellow me-2 px-4">Login</button>
        <button type="button" class="color-btn px-4">Sign-up</button>
      </div>
    </header>
  )
}

export default Header