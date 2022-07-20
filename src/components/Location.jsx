import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
import SearchBar from './SearchBar';
import '../App.css'

const Location = () => {

    const getRandomInt = (max) => Math.floor(Math.random() * max)

    const id = getRandomInt(127)
    // const id = 1

    const [location, setLocation] = useState([])

    const [page, setPage] = useState(1)

    const lastIndex = page * 8

    const firstIndex = lastIndex - 8

    const residentsPaginated = location.residents?.slice(firstIndex, lastIndex)

    const lastPage = Math.ceil(location.residents?.length / 8);

    const numbers = []

    for (let i = 1; i <= lastPage; i++) {
        numbers.push(i);
    }

    const getLocation = (url) => {
        axios.get(url)
            .then(res => {
                setLocation(res.data)
            })
    }

    useEffect(() => {
        const url = 'https://rickandmortyapi.com/api/location/' + id
        getLocation(url)

    }, [])

    return (
        <div className='location-container'>
            <div style={{ background: '#062226' }} className='text-center rounded-4 p-4'>
                <h1>{location.name}</h1>
                <div className='d-flex flex-column flex-lg-row justify-content-around'>
                    <h4>Type:<br /><span>{location.type}</span></h4>
                    <h4>Dimension:<br /><span>{location.dimension}</span></h4>
                    <h4>Population:<br /><span>{location.residents?.length}</span></h4>
                </div>
            </div>
            <SearchBar getLocation={getLocation} />
            <div className="row justify-content-center">
                {residentsPaginated?.map(resident => (
                    <ResidentInfo key={resident} residentUrl={resident} />
                ))}
            </div>
            <div className='d-flex justify-content-center my-5'>
                <button onClick={() => setPage(page - 1)} className={`btn btn-secondary m-4 ${page === 1 && 'disabled'}`}>Page Down</button>
                {numbers.map(number => (
                    <button onClick={() => setPage(number)} className='btn btn-secondary m-4'>{number}</button>
                ))}
                <button onClick={() => setPage(page + 1)} className={`btn btn-secondary m-4 ${(page === lastPage || lastPage === 0) && 'disabled'}`}>Page Up</button>
            </div>
        </div>
    );
};

export default Location;