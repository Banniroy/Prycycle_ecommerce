import React from 'react';
import '../Css/Home.css';

const Home = () => {
    return (

        <div className='Home'>
            <div className='bycycleLink_1'>
                <div className="container">
                    <h2 className='hero_1'>ALL ROUND TRAIL FUN</h2>
                    <h2 className='hero_2'>Ride it, no matter
                        the dirt
                    </h2>
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

            <div className="accessories">
                <div className='container'>
                    <p>Let Us Handle Your Bike Maintenance</p>
                    <p>We got you covered!!</p>
                    <button>SEE OUR SERVICES</button>
                </div>
            </div>

            <div className="skateboard">
                <div className="container">
                        <p>It always more fun</p>
                        <button>SHOP NOW &#8594;</button>
                </div>
            </div>

        </div>
    )
}

export default Home
