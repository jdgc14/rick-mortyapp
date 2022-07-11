import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SearchBar = ({ getLocation }) => {

    const [locationsSearched, setLocationsSearched] = useState([])

    const [search, setSearch] = useState('')


    const getLocationByName = () => {
        const url = 'https://rickandmortyapi.com/api/location/?name=' + search
        axios.get(url)
            .then(res => { setLocationsSearched(res.data.results) })
    }

    return (
        <div className='my-5'>
            <div>
                <input value={search} placeholder='Search a Location' type="text" className='rounded-2 search-bar' onChange={
                    (e) => {
                        setSearch(e.target.value)
                        getLocationByName()
                    }
                } />
                {locationsSearched.map(location => {
                    return (
                        <div key={location.id} className='bg-dark '>
                            <button onClick={() => {
                                getLocation(location.url)
                                setLocationsSearched([])
                            }}
                            className='btn'>
                                <span>{location.name}</span>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SearchBar;