import React,{useState,useEffect} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { addToCart } from '../../features/cartSlice'

const Header = () =>{
    const {cartTotalQuantity} = useSelector(state => state.cart)
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4" to="/">
                    Ecommmerce React
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>

                    </ul>
                    <div className = "buttons">

                        <Link to = "/cart" className = "btn btn-outline-dark me-2">
                            <i className = "fa fa-shopping-cart me-2"></i>Cart ({cartTotalQuantity})
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header