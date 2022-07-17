import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ residentUrl }) => {

    const [resident, setResident] = useState([])

    const bgAliveorDead = () => {
        if (resident.status === 'Alive') {
            return 'bg-success'
        } else if (resident.status === 'Dead') {
            return 'bg-danger'
        } else { return 'bg-dark' }
    }

    const getResident = (url) => {
        axios.get(url)
            .then(res => {
                setResident({
                    name: res.data.name,
                    status: res.data.status,
                    species: res.data.species,
                    image: res.data.image,
                    originName: res.data.origin.name,
                    episode: res.data.episode.length
                })
            })
    }

    useEffect(() => {
        const url = residentUrl
        getResident(url)
    }, [])

    return (
        <div className='col-sm-12 col-md-6 col-lg-3 p-3'>
            <div className='rounded-3 zoom card-character'>
                <div className='slide slide1'>
                    <div className='photo'>
                        <h4 className={`position-absolute p-2 rounded-4 ${bgAliveorDead()}`} style={{ top: '10px', left: '20px' }}>{resident.status}</h4>
                        <img src={resident.image} className='rounded-3' style={{ width: '100%', height:'100%' }} />
                    </div>
                </div>
                <div className='slide slide2 bg-dark rounded-3'>
                    <div className='d-flex flex-column gap-3'>
                        <div className='border-2 name-character-container text-center'>
                            <h4 className='my-auto'>{resident.name}</h4>
                        </div>
                        <div className='mx-3'>
                            <h6>Origin:<br /><span>{resident.originName}</span></h6>
                            <h6>Number of episodes:<br /><span>{resident.episode}</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResidentInfo;