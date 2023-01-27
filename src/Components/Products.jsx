import React from 'react'
import ProductsChild from './ProductsChild'
import { Outlet, Link } from "react-router-dom";
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
        },
        {
            img: 'https://content.api.news/v3/images/bin/b06bef9a5f8153a24f4abb07cbc2c11e?width=650',
            title: 'Camera',
            to: '/products/camera'
        },
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
        },
        {
            img: 'https://content.api.news/v3/images/bin/b06bef9a5f8153a24f4abb07cbc2c11e?width=650',
            title: 'Camera',
            to: '/products/camera'
        }
    ]
    let newArr = arr.map((item) => {
        return <ProductsChild key={item} data={item} />
    })
    return (
        <>
            <div>
                <div>
                    <p className='h2 text-center'>Here are some Products :</p>
                    <p className='h4 mt-5 text-center'>What do you Want to Purchase?</p>
                </div>
                <div style={{ margin: '3rem 7rem 0 7rem', border: '2px solid red' }} className='d-flex flex-wrap justify-content-between'>
                    {newArr}
                    <Outlet />

                </div>
            </div>
        </>
    )
}

export default Products