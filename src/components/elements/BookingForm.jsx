import React, { use, useState } from 'react'
import './BookingForm.css'

/*

---- !!! INFORMATION ABOUT HOW I HAVE USED chatGPT FOR THIS TASK !!! ----

To create this component, I have taken help from the school lecture "React - Enkel formulärhantering". 
But to be able to use "Regular Expression", I have partly watched the lecture "Validera formulär - Del 2" from our JavaScript course and "React - Validera formulär med Regular Expression i React",
and also received help with troubleshooting and how to formulate the code from ChatGPT.


To ensure that a user selects a "valid unit", I have created a list of selectable units.
My idea with this has been to make it easier for a user to select a "unit" when they want to make a booking,
but also to make it easier for a company to get the right information from a customer. And I also want the form to meet the WCAG criteria as much as possible.
I found this in a tutorial on Youtube. ( I have saved the source reference if needed )

*/



function BookingForm() {
    const [formData, setFormData] = useState({name: '', email: '', purpose: ''});
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState({});


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData ({...formData, [name]: value});

        if(value.trim() === '') {
            setError(prevError => ({...error, [name]: `A ${name} is required`}));
        } else {
            setError(prevError => ({...error, [name]: ''}));
        }
    };

    const unitOptions = [{
        label: "Small Unit",
        value: "Small Unit",
    },
    {
        label: "Medium Unit",
        value: "Medium Unit",
    },
    {
        label: "Large Unit",
        value: "Large Unit",
    },
    {   
        label: "Executive Unit",
        value: "Executive Unit",
    }
    ];

    const handleOk = () => {
        setSubmit(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const regexName = /^[A-Öa-ö\s\-]{2,}$/;
        const regexEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/;
        const newError = {};

        Object.keys(formData).forEach(field => {
            if(formData[field].trim() === '') {
                newError[field] = `A ${field} is required.`;
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

        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/booking', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });

        if(res.ok) {
            setSubmit(true)
            const data = await res.text()
            console.log(data)
            setFormData({name: "", email: "", purpose: ""})
        }

    };

    if (submit) {
        return (
            <div className='submittedInfo'>
                <p id='infoSent-text'>We have received your booking request and will respond to you within 1-2 business days.</p>
                <button className='bookingInfoSent-btn' onClick={handleOk}>OK!</button>
            </div>
        )
    };

  return (
    <div className='bookingForm-container'>
        <form className='bookingForm-wrapper' onSubmit={handleSubmit} noValidate>
            <div className='name-email-container'>
                <div className='bookingInput-group'>
                    <label htmlFor="bookingForm-name">Your Name <span className={`bookingForm-span ${error.name ? 'error' : ''}`}>*</span></label>
                    <input id='bookingForm-name' className={`bookingForm-name ${error.name ? 'error' : ''}`} name='name' value={formData.name} onChange={handleChange} type="text" required placeholder='Your Name'/>
                    <span className='booking-span'>{error.name && error.name}</span>
                </div>
                
                <div className='bookingInput-group'>
                    <label htmlFor="bookingForm-email">Email <span className={`bookingForm-span ${error.email ? 'error' : ''}`}>*</span></label>
                    <input id='bookingForm-email' className={`bookingForm-email ${error.email ? 'error' : ''}`} name='email' value={formData.email} onChange={handleChange} type="email" required placeholder='Email'/>
                    <span className='booking-span'>{error.email && error.email}</span>
                </div>
            </div>
            <div className='bookingInput-group'>
                    <label htmlFor="bookingForm-selectedUnit ">Choose Unit  <span className={`bookingForm-span ${error.selectedUnit ? 'error' : ''}`}>*</span></label>
                    <select id='bookingForm-selectedUnit ' className={`bookingForm-selectedUnit  ${error.selectedUnit ? 'error' : ''}`} name='selectedUnit' value={formData.selectedUnit} onChange={handleChange} type="text" required placeholder='Choose Unit '>
                        {unitOptions.map(option => ( <option key={option.value} value={option.value}> {option.label} </option> ))}
                    </select>
                    <span className='booking-span'>{error.selectedUnit && error.selectedUnit}</span>
            </div>

            <div className='bookingInput-group'>
                    <label htmlFor="bookingForm-purpose">Storage purpose <span className={`bookingForm-span ${error.purpose ? 'error' : ''}`}>*</span></label>
                    <textarea id="bookingForm-purpose" name="purpose" className={`bookingForm-purpose ${error.purpose ? 'error' : ''}`} value={formData.purpose} onChange={handleChange} required placeholder='Describe your storage purpose so that we can match your request'></textarea>
                    <span className='booking-span'>{error.purpose && error.purpose}</span>
            </div>

            <button className='bookUnit-button' type='submit'>Book Unit</button>
        </form>
    </div>
  )
}

export default BookingForm