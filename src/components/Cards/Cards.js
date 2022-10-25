import React from 'react';
import pencil from '../../assets/icon/pencil-icon.svg'
import certificate from '../../assets/icon/certificate-icon.svg'
import cources from '../../assets/icon/cources-icon.svg'
import gratuate from '../../assets/icon/gratuate-icon.svg'

const Cards = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 lg:w-10/12 mx-auto my-6'>
            <div className="card card-side bg-base-100 shadow-xl hover:bg-gray-400
             ">
                <img className='ml-5' src={pencil} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title">10K!</h2>
                    <p>Online Courses</p>
                    
                </div>
            </div>
            
            <div className="card card-side bg-base-100 shadow-xl hover:bg-gray-400">
                <img className='ml-5'  src={cources} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title">200+</h2>
                    <p>Expert Tutors</p>
                    
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl hover:bg-gray-400">
                <img className='ml-5' src={certificate} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title">6K +</h2>
                    <p>Ceritified Courses</p>
                    
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl hover:bg-gray-400">
                <img className='ml-5' src={gratuate} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title">60K +</h2>
                    <p>Online Students</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Cards;