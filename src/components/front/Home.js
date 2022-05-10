import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { SlideImages } from '../back/Data/slideImage';
import Logo1 from './1.jpg'
import Logo2 from './2.jpg'
import Product from './Product'
const Home = ({productItems}) => {

    return (
        <>

            <div className="hero">
                <Slide>

                    {SlideImages.map((slideImage, index) => {
                        const { img } = slideImage
                        return (

                            <div key={index}>
                                <img src={img}alt="robot-hi" height="600px" width="100%"/>
                            </div>
                        )
                    })}
                </Slide>
                <div className="hero-logo">
                    <img src={Logo1} width="100%" height="300px" />
                    <img src={Logo2} width="100%" height="300px" />
                </div>
            </div>         
            <Product productItems = {productItems}/>
        </>
    )
}

export default Home