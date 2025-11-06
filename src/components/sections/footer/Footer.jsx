import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
     <footer>
      <div className="container">
            <p>&copy; 2025 StorAid, All rights reserved.</p>
            <div className="footerLink-Container">
                <NavLink id="terms-link" to="*" aria-label='Link to Terms and conditions'>
                    <div className="footer-icon">
                    <div className="icon-content"></div>
                    </div>
                    Terms & Conditions
                </NavLink>
        
                <NavLink id="policy-link" to="*" aria-label='Link to Privacy Policy'>
                    <div className="footer-icon">
                    <div className="icon-content"></div>
                    </div>
                    Privacy Policy
                </NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer