import React from 'react'
import CardsChild from './CardsChild'
function Cards() {
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
        return <CardsChild key={item} data={item} />
    })
    return (
        <>
            <div className='col-lg-8 border border-2 border-info me-5 p-3'>
                <div className=''>
                    {newArr}
                </div>
            </div>
        </>
    )
}

export default Cards