import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';

const Home = () => {
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

            <div className='bycycleLink_2'>
                <div className='container'>
                    <div className='label-container'>
                        <h3 className='hero_1'>PRYCYLE BIKES</h3>
                        <p className='hero_2'>E-Bikes, Mountain, Gravel, Road & More!</p>
                        <button>SHOP NOW &#8594;</button>
                    </div>
                </div>
            </div>

            <div className="prycycle">
                <div className='container'>
                    <p>PRYCYCLE IS YOUR ONLINE SOURCE FOR BIKES, COMPONENTS, APPAREL &ACCESSORIES.</p>
                    <h3>WE KEEP YOU PEDALING!!</h3>
                </div>
            </div>

            <div className="skateboard">
                <button>SHOP NOW &#8594;</button>
            </div>

            <div>
            </div>

        </div>
    )
}

export default Home
