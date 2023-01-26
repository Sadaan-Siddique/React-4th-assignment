import React from 'react'
import { Outlet, Link } from "react-router-dom";
function ProductsChild(props) {
    return (
        <>
                    <img src={props.data.img} className="card-img-top" alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.data.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to={props.data.to} className="btn btn-primary">Go somewhere</Link>
                    </div>
        </>
    )
}

export default ProductsChild