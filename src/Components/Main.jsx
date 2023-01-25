import React from 'react'
import '../App.css'
import { Outlet, Link } from "react-router-dom";
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
function Main() {
    return (
        <>
            <div>
                <div className="div1 text-light">
                    <div className='w-75 pb-2'>
                        <h1>React Router</h1>
                        <p>Click Button for see Pages without the Reloading of Page</p>
                        <Link className="btn btn-outline-success" to="/products">Search</Link>
                        <button>Services</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main