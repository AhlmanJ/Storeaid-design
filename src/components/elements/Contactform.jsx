import React, { createElement, use, useState } from 'react'
import './Contactform.css'

/*

---- !!! INFORMATION ABOUT HOW I HAVE USED chatGPT FOR THIS TASK !!! ----

To create this component, I have taken help from the school lecture "React - Enkel formulärhantering". 
But to be able to use "Regular Expression", I have partly watched the lecture "Validera formulär - Del 2" from our JavaScript course and "React - Validera formulär med Regular Expression i React",
and also received help with troubleshooting and how to formulate the code from ChatGPT.
*/

function Contactform() {
    const [formData, setFormData] = useState({name: '', email: '', subject: '', comment: ''});
    const [submit, setSubmit] = useState(false);
    const [error,setError] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});

        if(value.trim() === '') {
            setError(prevError => ({...error, [name]: `A ${name} is required.`}))
        } else {
            setError(prevError => ({...error, [name]: ''}))
        };
    };

    const handleOk = () => {
        setSubmit(false)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const regexName = /^[A-Öa-ö\s\-]{2,}$/;
        const regexEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/;
        const newError = {};

        Object.keys(formData).forEach(field => {
            if(formData[field].trim() === ''){
                newError[field] = `A ${field} is required.`
            }
        });

        if(!regexName.test(formData.name)) {
            setError({name: 'Please enter at least a 2 character long name without numbers.'})
            return

        }else if(!regexEmail.test(formData.email)) {
            setError({email: 'Please enter a valid email adress.'})
            return
        }else if(Object.keys(newError).length > 0) {
            setError(newError)
            return
        };

        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if(res.ok) {
            setSubmit(true)
            const data = await res.text()
            console.log(data)
            setFormData({name: "", email: "", subject: "", comment: ""})
        }
    };

    if (submit) {
        return (
            <div className='submittedInformation'>
                <h2 id='infoSent-h2'>Thank you for contacting us.</h2>
                <p id='infoSent-txt'>We have received your message and will respond to you within 1-2 business days.</p>
                <button className='informationSent-btn' aria-label='Button to confirm sent information.' onClick={handleOk}>OK!</button>
            </div>
        )
    };

  return (
    <div className='contactForm-container'>
        <form className='contactForm-wrapper' onSubmit={handleSubmit} noValidate>
            <div className='input-group'>
                <label htmlFor="contactForm-name">Your Name <span className={`contactForm-span ${error.name ? 'error' : ''}`}>*</span></label>
                <input id='contactForm-name' className={`contactForm-name ${error.name ? 'error' : ''}`} name='name' value={formData.name} onChange={handleChange} type="text" required placeholder='Your Name'/>
                <span className='subscribe-span'>{error.name && error.name}</span>
            </div>
            
            <div className='emailAndPhone'>
                <div className='input-group'>
                    <label htmlFor="contactForm-email">Email <span className={`contactForm-span ${error.email ? 'error' : ''}`}>*</span></label>
                    <input id='contactForm-email' className={`contactForm-email ${error.email ? 'error' : ''}`} name='email' value={formData.email} onChange={handleChange} type="email" required placeholder='Email'/>
                    <span className='subscribe-span'>{error.email && error.email}</span>
                </div>

                <div className='input-group'>
                    <label htmlFor="contactForm-telephone">Telephone</label>
                    <input id='contactForm-telephone' className='contactForm-telephone' name='phoneNumber' type="tel" placeholder='Telephone'/>
                </div>
            </div>

            <div className='input-group'>
                    <label htmlFor="contactForm-subject">Subject <span className={`contactForm-span ${error.subject ? 'error' : ''}`}>*</span></label>
                    <input id='contactForm-subject' className={`contactForm-subject ${error.subject ? 'error' : ''}`} name='subject' value={formData.subject} onChange={handleChange} type="text" required placeholder='How can we help you'/>
                    <span className='subscribe-span'>{error.subject && error.subject}</span>
            </div>

            <div className='input-group'>
                    <label htmlFor="contactForm-comments">Comments / Questions <span className={`contactForm-span ${error.comment ? 'error' : ''}`}>*</span></label>
                    <textarea id="contactForm-comments" name="comment" className={`contactForm-comments ${error.comment ? 'error' : ''}`} value={formData.comment} onChange={handleChange} required placeholder='Comments'></textarea>
                    <span className='subscribe-span'>{error.comment && error.comment}</span>
            </div>

            <button className='submit-button' aria-label='Button to submit form.' type='submit'>Submit</button>
        </form>
    </div>
  )
};

export default Contactform