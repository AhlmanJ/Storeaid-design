import React from 'react'
import './BlogAndNews.css'
import Card from '../../elements/Card'


function BlogAndNews() {

  return (
    <div className='blogandnews-container'>
        <h2 className='blog-header'>Latest Blog and News</h2>
        <div className='blogTxt-container'>
            <h3 className='blogH3'>Check Out Our Latest Blog and News Update</h3>
            <p className='blogP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
        </div>
        <div className='cards-container'>
          <Card />
        </div>
    </div>
  )
}

export default BlogAndNews