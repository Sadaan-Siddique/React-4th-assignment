import React from 'react'
import FooterDiv from './FooterDiv'
import FooterUl from './FooterUl'
function Footer() {
    return (
        <div className='mt-5'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <FooterDiv />
                <FooterUl />


            </footer>
        </div>
    )
}

export default Footer