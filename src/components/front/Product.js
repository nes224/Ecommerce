import React from 'react'
import './Product.css'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../features/cartSlice'
import { useNavigate } from 'react-router-dom'

const Products = ({productItems}) =>{
    const allcategories = ['all', ... new Set(productItems.map((item) => item.category))]
    console.log(allcategories)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleAddToCart = (item) =>{
        dispatch(addToCart(item))
        navigate('/cart')
    }

    return(
        <div className = "products">

            

            {productItems.map((item) =>(
                <article key = {item.id}>
                    <div className = "card">
                        <div>
                            <img className = "product-image" src = {item.image} alt = {item.name} />
                        </div>
                        <div>
                            <h3 className = "product-name">
                                {item.name}
                            </h3>
                        </div>
                        <div className = "product-price">
                            ${item.price}
                        </div>
                        <div>
                            <button className = "product-add-button" onClick = {()=> handleAddToCart(item)}>Add to Cart </button>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}
export default Products 