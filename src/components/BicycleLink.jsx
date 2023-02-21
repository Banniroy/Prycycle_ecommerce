import React from 'react'
import image_1 from '../img/bicycle_0.jpg';
import image_2 from '../img/bicycle_2.jpg';

const BicycleLink = () => {
    return (
        <div className='bycycleLink'>
            <div className='bycycleLink_1'>
                <h2 className='hero_1'>ALL ROUND TRAIL FUN</h2>
                <h2 className='hero_2'>Rock it, no matter
                    the dirt
                </h2>
                <img className='image_1' src={image_1} height='300' />
            </div>

            <div className='bycycleLink_2'>
                <h3 className='hero_1 hero'>PRYCYLE BIKES</h3>
                <p className='hero_2 hero'>E-Bikes, Mountain, Graavel, Road & More!</p>
                <button className='hero'>SHOP NOW</button>
                <img className='image_1' src={image_2} height='300' />
            </div>

        </div>
    )
}

export default BicycleLink