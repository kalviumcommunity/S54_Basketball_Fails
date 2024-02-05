import React from 'react'
import basketball from "../assets/basketball_logo-.png"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="navbar">
        <div className="left">
        <div className="navbar-logo"><img src={basketball} alt="" /></div>
        <div className='basketball-fails'>Basketball <span>Fails</span></div>
        </div>
        <div className="right">
          <div className='login'>Login</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar