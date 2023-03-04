import React, { useEffect, useState } from 'react';
import '../Css/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ setsearchQuery, setSearchResults, openSearch }) => {
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    const [namePlaceholder, setNamePlaceholder] = useState('Cannondale');

    useEffect(() => {
        const intervalid = setInterval(() => {
            const namePlaceholder = ['EcoCycle','Trek','Cervelo','Bianchi','Marin Bikes','Orbea','Colnago','BMC','SCOTT','Canyon','Kona','Cinelli','Pinarello','Trek Bicycle Corporation','Wiler Triestina','Schwinn','TrailTrekker','SwiftSwitch','OffRoad','Cruiserette','6.	Carbon Cruiser','Adventure Addict','Velocity Velo','Mountain Master','Electric Explorer','Road Rascal','Dirt Devil','Turbo Thrasher','Street Strider','Street Strider','Retro Roadster','Gravel Grinder','Classic Cruiser','Adventure Ace','Carbon Climber','Electric Elite','Folding Freedom','Trailblazer','Commuter Champion','Heavy-Duty Hiker','Adventure Attitude','Classic Cruiser','Street Surfer','Mini Ripper','Retro Rider','Pro Cruiser','Speed Demon','Park Prowler','All-Terrain Assault','Longboard Legend','Electric Eager','Mini Cruiser','	Trickster','Ramp Runner','Longboard Legend','Freeride Freak','Pro Thrasher','Street Slayer','Micro Cruiser','Carving Cruiser','Rail Ripper','Electric Enthusiast','Ramp Rebel','Longboard Cruiser','Skate Safari','Mountain Mauler','Speed Racer','Freestyle Fury']
            const randomIndex = Math.floor(Math.random() * namePlaceholder.length);
            setNamePlaceholder(namePlaceholder[randomIndex])
        }, 10000)
        return () => clearInterval(intervalid);
    }, [])

    return (
        <nav className='search-Form'>
            {openSearch && (
                <div className='search-w'>
                    <form className="search" onSubmit={handleSubmit}>
                        <input
                            className="search__input"
                            type="text"
                            id="search"
                            onChange={handleSearchChange}
                            placeholder={namePlaceholder}
                        />
                        <button className="search__button">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>

                    </form>
                </div>
            )}
        </nav>

    )
}

export default Nav