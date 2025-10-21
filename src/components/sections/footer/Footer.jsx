import React from 'react'
import './Footer.css'

function Footer() {
  return (
     <footer>
      <div className="container">
            <p>&copy; 2025 StorAid, All rights reserved.</p>
            <div className="footerLink-Container">
                <a id="terms-link" href="*" aria-label='Link to Terms and conditions'>
                    <div className="footer-icon">
                    <div className="icon-content"></div>
                    </div>
                    Terms & Conditions
                </a>
        
                <a id="policy-link" href="*" aria-label='Link to Privacy Policy'>
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