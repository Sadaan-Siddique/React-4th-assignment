import React from 'react'
import FooterDiv from './FooterDiv'
import FooterUl from './FooterUl'
function Footer() {
    return (
        <div className='footer-div'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-dark">
                <FooterDiv />
                <FooterUl />


            </footer>
        </div>
    )
}

export default Footer