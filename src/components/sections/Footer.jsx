import React from 'react'
import './Footer.css'

function Footer() {
  return (
     <footer>
      <div className="container">
            <p>&copy; 2025 StorAid, All rights reserved.</p>
            <div className="footerLink_Container">
                <a id="terms_Link" href="#">
                    <div className="footer_Icon">
                    <div className="icon_Content"></div>
                    </div>
                    Terms & Conditions
                </a>
        
                <a id="policy_Link" href="#" >
                    <div className="footer_Icon">
                    <div className="icon_Content"></div>
                    </div>
                    Privacy Policy
                </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer