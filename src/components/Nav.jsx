import React from 'react'

const Nav = ({ search, setSearch }) => {
    return (
        <nav>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Posts</label>
                <input
                    id='search'
                    type="text"
                    value={search}
                    placeholder='Search'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </nav>
    )
}

export default Nav