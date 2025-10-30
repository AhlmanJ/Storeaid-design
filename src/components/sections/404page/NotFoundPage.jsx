import React from 'react'
import './NotFoundPage.css'
import Button_BackToHome from '../../elements/Button_BackToHome'

function NotFoundPage() {
  return (
    <div className='notfound-container'>
      <h1 className='notFound-h1'>Oops!</h1>
      <h2 className='notFound-h2'>Page Not Found</h2>
      <p className='notFound-paragraph'>Sorry, the page you are looking for does not exist. It may have been moved, removed altogether or is temporarily unavailable.</p>
      <div className='notFoundButton-container'>
        <Button_BackToHome />
      </div>
    </div>

  )
}

export default NotFoundPage