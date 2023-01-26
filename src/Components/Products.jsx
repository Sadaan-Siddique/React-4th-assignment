import React from 'react'
import ProductsChild from './ProductsChild'
import { Outlet, Link } from "react-router-dom";
function Products() {
    let arr = [
        {
            img: 'https://content.api.news/v3/images/bin/b06bef9a5f8153a24f4abb07cbc2c11e?width=650',
            title: 'Product 1',
            to : '/'
        },
        {
            img: 'https://content.api.news/v3/images/bin/b06bef9a5f8153a24f4abb07cbc2c11e?width=650',
            title: 'Product 1',
            to : '/products'
        },  
        {
            img: 'https://content.api.news/v3/images/bin/b06bef9a5f8153a24f4abb07cbc2c11e?width=650',
            title: 'Product 1',
            to : '/services'
        }
    ]
    let newArr = arr.map((item) => {
        return <ProductsChild key={item} data={item} />
    })
    return (
        <>
            <div>
                <p className='h2 text-center'>Here are some Products :</p>
                <p className='h4 mt-5 text-center'>What do you Want to Purchase?</p>
                <div className="card" style={{ "width": "18rem" }}>
                    {newArr}
                </div>
            </div>

        </>
    )
}

export default Products