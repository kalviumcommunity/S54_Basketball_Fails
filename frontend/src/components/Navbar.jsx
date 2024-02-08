import React from 'react'
import basketball from "../assets/basketball_logo-.png"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={basketball} alt="" />
          </div>
          <div className="navbar-basketball">
            Basketball <span>Fails</span>
          </div>
        </div>
        <div className="navbar-right">
          <div className="faq">FAQ</div>
          <div className="login">Login</div>
          <div className="signin">Sign in</div>
        </div>
      </div>
    </div>

  )
}

export default Navbar