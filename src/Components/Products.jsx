import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../App.css'
function Products() {
    return (
        <>
            <div className='text-center'>
                <h1>Here are some Products</h1>
            </div>
            <div className='row text-center justify-content-between border border-2 border-primary p-1'>
                <div className='col-lg-2 border border-2 border-danger ms-5 p-3'>
                    <Link className="btn btn-outline-success d-block " to="cards/motorcycle">MotorCycle</Link>
                    <Link className="btn btn-outline-success d-block " to="cards/car">Car</Link>
                    <Link className="btn btn-outline-success d-block " to="cards/laptops">Laptops</Link>
                    <Link className="btn btn-outline-success d-block " to="cards/cameras">Cameras</Link>
                    <Link className="btn btn-outline-success d-block " to="cards/books">Books</Link>
                    <Link className="btn btn-outline-success d-block " to="cards/watches">Watches</Link>
                    <Link className="btn btn-outline-success d-block " to="cards/shirt">Shirt</Link>
                    <Link className="btn btn-outline-success d-block " to="cards/helmets">Helmets</Link>
                    <Link className="btn btn-outline-success d-block " to="cards/jackets">Jackets</Link>
                </div>
                <div className='col-lg-8 border border-2 border-info me-5 p-3'>
                    <div className=''>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products