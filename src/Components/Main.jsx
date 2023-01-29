import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";
function Main() {
    return (
        <>
            <div>
                <div className="div1 text-light">
                    <div className='w-50 pb-2'>
                        <h1 style={{fontSize:'50px'}}>React Router</h1>
                        <p className='fw-light h6'>Click Button for see Pages without the Reloading of Page</p>
                        <Link className="btn btn-outline-dark border-3 fw-bold text-light" to="products">Products</Link>
                        <Link className="btn btn-outline-dark border-3 ms-1 fw-bold text-light" to="services">Services</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main