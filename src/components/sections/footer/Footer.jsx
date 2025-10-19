import React from 'react'
import './Footer.css'

function Footer() {
  return (
     <footer>
      <div className="container">
            <p>&copy; 2025 StorAid, All rights reserved.</p>
            <div className="footerLink-Container">
                <a id="terms-link" href="#">
                    <div className="footer-icon">
                    <div className="icon-content"></div>
                    </div>
                    Terms & Conditions
                </a>
        
                <a id="policy-link" href="#" >
                    <div className="footer-icon">
                    <div className="icon-content"></div>
                    </div>
                    Privacy Policy
                </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer