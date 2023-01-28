import React from 'react'
import ProductsChild from './ProductsChild'
import { Outlet, Link } from "react-router-dom";
import '../App.css'
import Camera from './Camera';
import Book from './Book';
function Products() {
    let arr = [
        {
            img: 'https://content.api.news/v3/images/bin/b06bef9a5f8153a24f4abb07cbc2c11e?width=650',
            title: 'Camera',
            to: '/products/camera'
        },
        {
            img: 'https://miro.medium.com/max/1400/1*agY3OHteeQfsEo94Tz42vw.jpeg',
            title: 'Books',
            to: '/products/book'
        },
        {
            img: 'https://autodeals.pk/blog/wp-content/uploads/2022/11/Volkswagen-Works-Secretly-to-Develop-Hydrogen-Car.jpg',
            title: 'Car',
            to: '/products/car'
        }
    ]
    let newArr = arr.map((item) => {
        return <ProductsChild key={item} data={item} />
    })
    return (
        <>
            <div className='text-center'>
                <h1>Here are some Products</h1>
            </div>
            <div className='row text-center justify-content-between border border-2 border-primary p-1'>
                <div className='col-lg-2 border border-2 border-danger ms-5 p-1'>
                    <Link className="btn btn-outline-success" to="services">MotorCycle</Link>
                    <Link className="btn btn-outline-success" to="services">Car</Link>
                    <Link className="btn btn-outline-success" to="services">Laptops</Link>
                    <Link className="btn btn-outline-success" to="services">Cameras</Link>
                    <Link className="btn btn-outline-success" to="services">Books</Link>
                </div>
                <div className='col-lg-8 border border-2 border-info me-5'>
                    <div className=''>
                        {newArr}
                    </div>
                </div>
            </div>
            {/* <div>
                <div>
                    <p className='h2 text-center'>Here are some Products :</p>
                    <p className='h4 mt-5 text-center'>What do you Want to Purchase?</p>
                </div>
                <div style={{ margin: '3rem 7rem 0 7rem', border: '2px solid red' }} className='product-div d-flex justify-content-between text-center'>
                    <div className=''>
                        {newArr}
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Products