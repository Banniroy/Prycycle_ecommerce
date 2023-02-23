import React from 'react'
import Ad_1 from '../img/Ad_1.png';
import Ad_2 from '../img/Ad_2.png';
import Ad_3 from '../img/Ad_3.jpeg';
import { Link, Route, Switch } from 'react-router-dom';
import BicycleProductList from './BicycleProductList';

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
                <Link to="/BproductLists" >
                    <div className='bicycle-Ad'>
                        <img src={Ad_1} alt="" width='113' height='90' />
                        <p>COMPLETE BIKES</p>
                    </div>
                </Link>

                <Link to="/SproductLists" >
                    <div className='bicycle-Ad'>
                        <img src={Ad_2} alt="" width='150' height='90' />
                        <p>SKATEBOARDS</p>
                    </div>
                </Link>

                <Link to="/SproductLists" >
                    <div className='bicycle-Ad'>
                        <img src={Ad_3} alt="" width='113' height='100' />
                        <p>COMPONENTS & ACCESSORIES</p>
                    </div>
                </Link>

                <Link to="/SproductLists" >
                    <div className='sales'>
                        <p>SALES</p>
                    </div>
                </Link>

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
                <div className='container'>
                    <p>COMMING SOON</p>
                </div>
            </div>

            <div>
                <Switch>
                    <Route exact path="/BproductLists" component={BicycleProductList} />
                </Switch>
            </div>

        </div>
    )
}

export default BicycleLink
