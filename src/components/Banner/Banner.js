import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/icon/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
          <div>
            <p className="py-6">The Leader in Online Learning</p>
            <h1 className="text-5xl font-bold">Engaging & Accessible Online Courses For All</h1>
            <p className="py-6">Own your future learning new skills online</p>
            <Link to='/course'><button className="btn btn-primary">See Courses</button></Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;