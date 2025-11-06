
/*
NOTE! This code block is built with support from chatGPT!

I wanted to be able to change the content of the banner depending on which page the user is on. 
So I found the "React Hook" - "useLocation" on the internet but after searching for a long time for tips on how to use it, 
I asked chatGPT for advice and got the answer that I can use a Switch statement or an IF statement to achieve this.
*/

import { useLocation } from 'react-router-dom'
import './Banner.css'
import React from 'react'

function Banner() {

/*<--- NOTE! This code block is created by chatGPT! (Start) --->*/

    let location = useLocation()
    let heading = '';

    switch(location.pathname) {
        case '/AboutUs':
            heading = 'About Us';
            break;
        case '/Services':
            heading = 'Services';
            break;
        case '/ContactUs':
            heading = 'Contact Us';
            break;
        case '/Booking':
            heading = 'Booking';
            break;
        default:
            heading = '';
            break;
    }
/*<--- NOTE! This code block is created by chatGPT! (End) --->*/

    return (
        <div className='banner-text'>
            <h1 className='banner-h1'>{heading}</h1>
            <p className='banner-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <span className='text-br'></span> ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
  )
}

export default Banner