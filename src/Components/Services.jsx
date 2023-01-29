import React from 'react'
import bootstrap from './images/Bootstrap.png'
import html from './images/HTML.png'
import js from './images/JS.png'
import css from './images/CSS.png'
import react from './images/React.png'

function Services() {
  return (
    <>
      <div>
        <h1 className='text-center fw-bold mt-3'>This is services</h1>
        <div className='ms-5 mt-5'>
          <div className='mt-1 d-flex '>
            <img src={html} style={{ height: '50px' }} alt="alternative" />
            <h3 className='ms-3 mt-2 fw-bold'>HTML</h3>
          </div>
          <div className='mt-1 d-flex '>
            <img src={css} style={{ height: '50px' }} alt="alternative" />
            <h3 className='ms-3 mt-2 fw-bold'>CSS</h3>
          </div>
          <div className='mt-1 d-flex '>
            <img src={bootstrap} style={{ height: '50px' }} alt="alternative" />
            <h3 className='ms-3 mt-2 fw-bold'>BootStrap</h3>
          </div>
          <div className='mt-1 d-flex '>
            <img src={js} style={{ height: '50px' }} alt="alternative" />
            <h3 className='ms-3 mt-2 fw-bold'>JS</h3>
          </div>
          <div className='mt-1 d-flex '>
            <img style={{ backgroundColor: 'black', padding: '5px', borderRadius: '10px', height: '50px' }}
              src={react} alt="alternative" />
            <h3 className='ms-3 mt-2 fw-bold'>React</h3>
          </div>
        </div>


      </div>
    </>
  )
}

export default Services