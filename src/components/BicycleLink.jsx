import React from 'react'
import Ad_1 from '../img/Ad_1.png';
import Ad_2 from '../img/Ad_2.png';
import Ad_3 from '../img/Ad_3.jpeg';

const BicycleLink = () => {
    return (
        <div className='bycycleLink'>
            <div className='bycycleLink_1'>
                <div className="container">
                    <h2 className='hero_1'>ALL ROUND TRAIL FUN</h2>
                    <h2 className='hero_2'>Ride it, no matter
                        the dirt
                    </h2>
                </div>
            </div>

            <div className='menu_link'>
                <div className='bicycle-Ad'>
                    <img src={Ad_1} alt="" width='113' height='90' loading='lazy'/>
                    <p>COMPLETE BIKES</p>
                </div>
                <div className='bicycle-Ad'>
                    <img src={Ad_2} alt="" width='150' height='90' loading='lazy'/>
                    <p>SKATEBOARDS</p>
                </div>
                <div className='bicycle-Ad'>
                    <img src={Ad_3} alt="" width='113' height='100' loading='lazy'/>
                    <p>COMPONENTS & ACCESSORIES</p>
                </div>
                <div className='sales'>
                    <p>SALES</p>
                </div>

            </div>

            <div className='bycycleLink_2'>
                <div className='container'>
                    <div className='label-container'>
                        <h3 className='hero_1'>PRYCYLE BIKES</h3>
                        <p className='hero_2'>E-Bikes, Mountain, Gravel, Road & More!</p>
                        <button>SHOP NOW &#8594;</button>
                    </div>
                </div>
            </div>

            <div className="skateboard">
                <div className='container'>
                    <p>COMMING SOON</p>
                </div>
            </div>

        </div>
    )
}

export default BicycleLink