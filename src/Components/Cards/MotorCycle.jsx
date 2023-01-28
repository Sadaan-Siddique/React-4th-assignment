import React from 'react'
import { Link } from 'react-router-dom'
import img from '../images/Background.jpg'

function MotorCycle() {
    return (
        <>
            <div>MotorCycle</div>
            <div>Books</div>
            <div className="card" style={{ "width": "18rem", border: '2px solid blue' }}>
                <img src={img} className="card-img-top " alt="img" />
                <div className="card-body">
                    <h5 className="card-title">Book</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to='/' className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </>
    )
}

export default MotorCycle