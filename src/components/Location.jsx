import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
import SearchBar from './SearchBar';
import '../App.css'

const Location = () => {

    const getRandomInt = (max) => Math.floor(Math.random() * max)

    const id = getRandomInt(127)

    const [location, setLocation] = useState([])

    const getLocation = (url) => {
        axios.get(url)
            .then(res => { setLocation(res.data) })
    }

    useEffect(() => {
        const url = 'https://rickandmortyapi.com/api/location/' + id
        getLocation(url)
        setResidents(location.residents)
    }, [])

    const [index, setIndex] = useState(0)

    const [residents, setResidents] = useState([])

    const pageUp = () => {
        const newResisdents = []
        for (let i = index + 1; i < index + 6; i++) {
            if (residents[i]) {
                newResisdents.push(residents[i])
            }
        }
        setIndex(index + 6)
        return newResisdents
    }

    const pageDown = () => {
        const newResisdents = []
        for (let i = index - 12; i < index - 6; i++) {
            newResisdents.push(residents[i])
            
        }
        setIndex(index - 6)
        return newResisdents
    }

    return (
        <div className='location-container'>
            <div style={{ background: '#062226' }} className='text-center rounded-4 p-4'>
                <h3 style={{ fontSize: '3rem' }}>{location.name}</h3>
                <div className='d-flex justify-content-around'>
                    <p>Type:<br /><span>{location.type}</span></p>
                    <p>Dimension:<br /><span>{location.dimension}</span></p>
                    <p>Population:<br /><span>{location.residents?.length}</span></p>
                </div>
            </div>
            <SearchBar getLocation={getLocation} />
            <div className="row">
                {location.residents?.map(resident => (
                    <ResidentInfo key={resident} residentUrl={resident} />
                ))}
            </div>
        </div>
    );
};

export default Location;