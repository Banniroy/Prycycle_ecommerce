import React, { useEffect, useState } from 'react';
import '../Css/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ setsearchQuery, setSearchResults, openMenuSearch }) => {
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    const [namePlaceholder, setNamePlaceholder] = useState('Cannondale');

    useEffect(() => {
        const intervalid = setInterval(() => {
            const namePlaceholder = ['Giant Bicycles', 'Trek', 'Cervelo', 'Bianchi', 'Marin Bikes', 'Orbea', 'Colnago', 'BMC', 'SCOTT', 'Canyon', 'Kona', 'Cinelli', 'Pinarello', 'Trek Bicycle Corporation', 'Wiler Triestina', 'Schwinn']
            const randomIndex = Math.floor(Math.random() * namePlaceholder.length);
            setNamePlaceholder(namePlaceholder[randomIndex])
        }, 10000)
        return () => clearInterval(intervalid);
    }, [])

    return (
        <nav className='search-Form'>
            {openMenuSearch &&(
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
            )}
        </nav>

    )
}

export default Nav