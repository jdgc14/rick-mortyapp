import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ residentUrl }) => {

    console.log(residentUrl)

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
    console.log(resident)
    return (
        <div className='col-sm-12 col-md-6 p-3 my-2'>
            <div className='bg-dark rounded-3 zoom card-character'>
                <div className='position-relative'>
                    <p className={`position-absolute p-2 rounded-4 ${bgAliveorDead()}`} style={{top:'10px', left:'20px'}}>{resident.status}</p>
                    <img src={resident.image} className='rounded-3' style={{ width: '100%' }} />
                </div>
                <div className='d-flex flex-column gap-3'>
                    <div className='border-bottom border-2 name-character-container text-center'>
                        <p className='my-auto name-character'>{resident.name}</p>
                    </div>
                    <div className='mx-3'>
                        <p>Origin:<br />{resident.originName}</p>
                        <p>Number of episodes:<br />{resident.episode}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResidentInfo;