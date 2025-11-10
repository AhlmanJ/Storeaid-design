import React from 'react'
import './WhyChooseUs.css'
import { useLocation } from 'react-router-dom'


/* 
Using the same "switch-case" that I got help with from chatGPT in the "Banner" section. 
To change the background color depending on which pathname we are on, I change the class name. Then I style this in the CSS file 

This works because I have React routers installed in my project. With this feature I can find out which route I am on and then make changes to that specific route.

--------- NOTE! ----------

I have changed the color of the heading in this section as the color in the design file had too poor contrast for WCAG.

*/

function WhyChooseUs() {

/*<--- NOTE! This code block is created by chatGPT! (Start) --->*/
    
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

/*<--- NOTE! This code block is created by chatGPT! (End) --->*/

  return (
    <section className={className}>
        <div className='content-container'>
            <h2 className='whyChooseUs-H2'>Why Choose Us</h2>
            <div className='section1'>
                <h3 className='whyChooseUs-H3'>Choose Us for Exceptional<span className='txt-br'></span>Storage Solutions</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui<span className='txt-br'></span>lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus<span className='txt-br'></span>eget elit gravida.</p>
            </div>
            <div className='section2'>
                <div className='section2-leftSide'>
                    <div className='lock'>
                    <div className='card'><img src="public/pictures/whyChooseUs/lock-icon.svg" alt="" /></div>
                    <div className='txt-container'>
                        <h3 className='whyChooseUs-H3'>Security and Safety</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='txt-br'></span>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    </div>
                    <div className='moneyBag'>
                    <div className='card'><img src="public/pictures/whyChooseUs/money-icon.svg" alt="" /></div>
                    <div className='txt-container'>
                        <h3 className='whyChooseUs-H3'>Flexible and Affordable</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='txt-br'></span>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    </div>
                    <div className='clean'>
                    <div className='card'><img src="public/pictures/whyChooseUs/clean-icon.svg" alt="" /></div>
                    <div className='txt-container'>
                        <h3 className='whyChooseUs-H3'>Clean and Well-Maintained Facilities</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='txt-br'></span>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    </div>
                    <div className='clock'>
                    <div className='card'><img src="public/pictures/whyChooseUs/clock-icon.svg" alt="" /></div>
                    <div className='txt-container'>
                        <h3 className='whyChooseUs-H3'>24/7 and Convenient Access</h3>
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