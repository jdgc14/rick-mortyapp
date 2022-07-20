import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'

const ResidentCard = () => {

    const { id } = useParams()

    const url = `https://rickandmortyapi.com/api/character/${id}`

    const [resident, setResident] = useState({})

    const getResident = () => {
        axios.get(url)
            .then(res => { setResident(res.data) })
    }

    const bgAliveorDead = () => {
        if (resident.status === 'Alive') {
            return 'bg-success'
        } else if (resident.status === 'Dead') {
            return 'bg-danger'
        } else { return 'bg-dark' }
    }

    useEffect(() => {
        getResident()
    }, [id])

    console.log(resident)

    return (
        <div className='my-5' style={{ display: 'grid', placeContent: 'center', minHeight: '60vh' }}>
            <h1 className='text-center'>Character Details</h1>
            <div className='d-flex bg-dark bg-opacity-75 rounded my-3'>

                <div className='d-flex justify-content-center position-relative'>
                    <img className='rounded-start' src={resident.image} style={{ width: '100%' }} alt="" />
                    <h4 className={`position-absolute p-1 rounded-4 ${bgAliveorDead()}`} style={{ top: '5px', right: '10px' }}>{resident.status}</h4>
                </div>
                <div className='p-2'>
                    <h2>{resident.name}</h2>
                    <h6>Gender:</h6>
                    <h5>{resident.gender}</h5>
                    <h6>Last known location:</h6>
                    <h5>{resident.location?.name}</h5>
                    <h6>First seen in:</h6>
                    <h5>{resident.origin?.name}</h5>
                    <h6>Number of Episodes:</h6>
                    <h5>{resident.episode?.length}</h5>
                </div>
            </div>
        </div>
    );
};

export default ResidentCard;