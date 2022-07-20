import React from 'react';
import Location from './Location';


const Home = () => {
    return (
        <>
            <div style={{
                height: '55vh',
                backgroundImage: 'url(https://images6.alphacoders.com/909/909641.png)',
                backgroundSize: '100% 130%',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                display: 'grid',
                placeContent: 'start center'
            }}>
                <img src="https://trazando.es/wp-content/uploads/2021/02/Rick-and-Morty-logo-1.png" className='title-name' />
            </div>
            <Location />
        </>
    );
};

export default Home;