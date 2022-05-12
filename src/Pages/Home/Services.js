import React from 'react';
import Service from './Service';
import fluoride from './../../assets/images/fluoride.png';
import cavity from './../../assets/images/cavity.png';
import whitening from './../../assets/images/whitening.png';
import DentalCare from './DentalCare';


const Services = () => {
    return (
        <div className='my-20 px-12'>
            <h4 className='uppercase text-primary font-bold text-center'>Our Services</h4>
            <p className='text-center text-2xl'>Services We Provide</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Service img={fluoride} cardTitle="Fluoride Treatment"></Service>
                <Service img={cavity} cardTitle="Cavity Filling"></Service>
                <Service img={whitening} cardTitle="Teeth Whitening"></Service>
            </div>
            <DentalCare></DentalCare>
        </div>
    );
};

export default Services;