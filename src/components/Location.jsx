import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
import SearchBar from './SearchBar';
import '../App.css'

const Location = () => {

    const getRandomInt = (max) => Math.floor(Math.random() * max)

    // const id = getRandomInt(127)
    const id = 1

    const [location, setLocation] = useState([])

    const [residents, setResidents] = useState([])

    const [index, setIndex] = useState(0)

    const getLocation = (url) => {
        axios.get(url)
            .then(res => { setLocation(res.data) })
    }

    useEffect(() => {
        const url = 'https://rickandmortyapi.com/api/location/' + id
        getLocation(url)
    }, [])

    

    

    const pageUp = () => {
        const newResisdents = []
        for (let i = index; i < index + 6; i++) {
            if (residents?.[i]) {
                newResisdents.push(residents[i])
            }
        }
        setIndex(index + 6)
        console.log(newResisdents)
        return newResisdents
    }

    const pageDown = () => {
        const newResisdents = []
        for (let i = index - 12; i < index - 6; i++) {
            newResisdents.push(residents[i])
            
        }
        setIndex(index - 6)
        console.log(newResisdents)
        return newResisdents
    }

    return (
        <div className='location-container'>
            <div style={{ background: '#062226' }} className='text-center rounded-4 p-4'>
                <h1>{location.name}</h1>
                <div className='d-flex justify-content-around'>
                    <h4>Type:<br /><span>{location.type}</span></h4>
                    <h4>Dimension:<br /><span>{location.dimension}</span></h4>
                    <h4>Population:<br /><span>{location.residents?.length}</span></h4>
                </div>
            </div>
            <SearchBar getLocation={getLocation} />
            <div className="row">
                {location.residents?.map(resident => (
                    <ResidentInfo key={resident} residentUrl={resident} />
                ))}
            </div>
            <button onClick={pageUp} className='btn btn-primary m-4'>Page Up</button>
            <button onClick={pageDown} className='btn btn-primary m-4'>Page Down</button>
        </div>
    );
};

export default Location;