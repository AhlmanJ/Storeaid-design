import React, { useState } from 'react'
import './SubscribeForm.css'
import { Await } from 'react-router-dom';

/* 
To create this component, I have taken help from the school lecture "React - Enkel formulärhantering". 
But to be able to use "Regular Expression", I have partly watched the lecture "Validera formulär - Del 2" from our JavaScript course and also received help
with troubleshooting and how to formulate the code from ChatGPT.
*/



function SubscribeForm() {
    const [subscribeData, setSubscribeData] = useState({email: ""});
    const [error, setError] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubscribeData({...subscribeData, [name]: value});
        let asterisk = document.querySelector('.subscribe-asterisk')

        if(value.trim() === '') {
            setError(prevErrors => ({...prevErrors,[name]: 'This field is required'}))
            asterisk.classList.add('errors')
        } else {
            setError(prevErrors => ({...prevErrors,[name]: ''})) 
        }
    }

    const handleSubscribed = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        e.preventDefault();

        if(subscribeData.email.trim() === '') {
            setError({email: 'This field is required'})
            return;
        }

        if(!regexEmail.test(subscribeData.email)) {
            setError({email: 'Please enter a valid email adress.'})
            return
        }else {
            setError({email: ''})
            
        }

        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscribeData)
        })

        if(res.ok) {
            setSubmitted(true)
            setSubscribeData({email: ""})
            setError({})
        }
    }

    if (submitted) {
        return (
            <div className='confirmedSubscription'>
                <h1>You are now subscribed to our newsletter!</h1>
                <button className='confirm-btn' onClick={handleSubscribed}>OK</button>
            </div>
        )
    }

  return (
    <div className='SubscribeForm-container'>
        <form className='subscribe' onSubmit={handleSubmit} noValidate>
        <div>
            <input className={`subscribe-input ${error.email ? 'error' : ''}`} type="email" name='email' value={subscribeData.email} onChange={handleChange} required placeholder='Enter your email' />
            <span className='subscribe-asterisk'>*</span>
            <span className='subscribe-span'>{error.email && error.email}</span>
        </div>
        <button className='subscribe-btn' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SubscribeForm