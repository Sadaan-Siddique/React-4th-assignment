import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../App.css'
function Products() {
    let arr = [
        {
            class : 'btn btn-outline-dark border-1 fw-bold d-block mt-1',
            to : 'cards/motorcycle',
            product : 'MotorCycle'
        },
        {
            class : 'btn btn-outline-dark border-1 fw-bold d-block mt-1',
            to : 'cards/car',
            product : 'Car'
        },
        {
            class : 'btn btn-outline-dark border-1 fw-bold d-block mt-1',
            to : 'cards/laptops',
            product : 'Laptops'
        },
        {
            class : 'btn btn-outline-dark border-1 fw-bold d-block mt-1',
            to : 'cards/cameras',
            product : 'Cameras'
        },
        {
            class : 'btn btn-outline-dark border-1 fw-bold d-block mt-1',
            to : 'cards/books',
            product : 'Books'
        },
        {
            class : 'btn btn-outline-dark border-1 fw-bold d-block mt-1',
            to : 'cards/watches',
            product : 'Watches'
        },
        {
            class : 'btn btn-outline-dark border-1 fw-bold d-block mt-1',
            to : 'cards/shirt',
            product : 'Shirt'
        },
        {
            class : 'btn btn-outline-dark border-1 fw-bold d-block mt-1',
            to : 'cards/helmets',
            product : 'Helmets'
        },
        {
            class : 'btn btn-outline-dark border-1 fw-bold d-block mt-1',
            to : 'cards/jackets',
            product : 'Jackets'
        }
    ]
    return (
        <>
            <div className='text-center'>
                <h1 className='mt-3 fw-bold'>Here are some Products</h1>
            </div>
            <div className='row text-center justify-content-between p-1'>
                <div className='col-lg-2 ms-5 p-3'>
                    <h2 className='fw-bold'>Products</h2>
                    {arr.map((item)=>{
                        return (<Link className={item.class} to={item.to}>{item.product}</Link>)
                    })}
                </div>
                <div className='col-lg-8 me-5 p-3'>
                    <div className=''>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products