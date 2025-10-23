import React from 'react'
import './WhyChooseUs.css'
import { useLocation } from 'react-router-dom'


/* 
Using the same "switch-case" that I got help with from chatGPT in the "Banner" section. 
To change the background color depending on which pathname we are on, I change the class name. Then I style this in the CSS file 

This works because I have React routers installed in my project. With this feature I can find out which route I am on and then make changes to that specific route.
*/

function WhyChooseUs() {
    
        let location = useLocation()
        let className = '';

        switch(location.pathname) {
            case '/':
                className = 'Home';
                break;
            case '/AboutUs':
                className = 'AboutUs';
                break;
            case '/Booking':
                className = 'Bookings';
                break;
            default:
                heading = 'Home';
                break;
        }
  return (
    <section className={className}>
        <div className='content-container'>
            <h4>Why Choose Us</h4>
            <div className='section1'>
                <h3>Choose Us for Exceptional<span className='txt-br'></span>Storage Solutions</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui<span className='txt-br'></span>lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus<span className='txt-br'></span>eget elit gravida.</p>
            </div>
            <div className='section2'>
                <div className='section2-leftSide'>
                    <div className='lock'>
                    <div className='card'><img src="public/pictures/whyChooseUs/lock-icon.svg" alt="" /></div>
                    <div className='txt-container'>
                        <h5>Security and Safety</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='txt-br'></span>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    </div>
                    <div className='moneyBag'>
                    <div className='card'><img src="public/pictures/whyChooseUs/money-icon.svg" alt="" /></div>
                    <div className='txt-container'>
                        <h5>Flexible and Affordable</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='txt-br'></span>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    </div>
                    <div className='clean'>
                    <div className='card'><img src="public/pictures/whyChooseUs/clean-icon.svg" alt="" /></div>
                    <div className='txt-container'>
                        <h5>Clean and Well-Maintained Facilities</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='txt-br'></span>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    </div>
                    <div className='clock'>
                    <div className='card'><img src="public/pictures/whyChooseUs/clock-icon.svg" alt="" /></div>
                    <div className='txt-container'>
                        <h5>24/7 and Convenient Access</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='txt-br'></span>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    </div>
                </div>
                <div className='section2-rightSide'>
                    <div className='img-container'></div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default WhyChooseUs