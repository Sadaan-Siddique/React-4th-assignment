import React from 'react'
import { Link } from 'react-router-dom'
import img from '../images/helmet.jpg'
import '../../App.css'

function Helmets() {
    return (
        <>
            <h3>Helmets</h3>
            <div className="card card-div" style={{ "width": "18rem"}}>
                <img src={img} className="card-img-top " alt="img" />
                <div className="card-body">
                    <h5 className="card-title">Helmets</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to='/' className="btn btn-outline-dark border-1 fw-bold">Go somewhere</Link>
                </div>
            </div>
        </>
    )
}

export default Helmets