import React from 'react'
import image_0 from '../img/bicycle_0.jpg';
import image_1 from '../img/bicycle_1.jpg';

const BicycleLink = () => {
    return (
        <div className='bycycleLink'>
            <div className='bycycleLink_1'>
                <h2 className='hero_1'>ALL ROUND TRAIL FUN</h2>
                <h2 className='hero_2'>Rock it, no matter
                    the dirt
                </h2>
                <img className='image_1' src={image_0} height='300' />
            </div>

            <div className='menu_link'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>

            <div className='bycycleLink_2'>
                <div className='bycycleLink_2n'>
                    <h3 className='hero_1'>PRYCYLE BIKES</h3>
                    <p className='hero_2'>E-Bikes, Mountain, Gravel, Road & More!</p>
                    <button>SHOP NOW &#8594;</button>
                </div>
                <img className='image_1' src={image_1} height='300' />
            </div>

        </div>
    )
}

export default BicycleLink