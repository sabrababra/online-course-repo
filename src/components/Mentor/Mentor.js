import React from 'react';
import share from '../../assets/icon/share.png';
import {AiFillCheckCircle} from 'react-icons/ai'
const Mentor = () => {
    return (
        <div className='w-11/12 mx-auto  grid grid-cols-5 my-32'>
            <div className='col-span-3 lg:col-span-2'>
                <img src={share} alt="" />
            </div>
            <div className='col-span-5 lg:col-span-3 w-10/12 mx-auto my-auto '>
            <h1 className='text-4xl font-semibold mb-5'>Want to share your knowledge? Join us a Mentor</h1>
            <p>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
           <div className='mt-5'>
           <span className='flex items-center gap-2 text-xl'><AiFillCheckCircle className='text-primary'></AiFillCheckCircle>Best Courses</span>
           <span className='flex items-center gap-2 text-xl'><AiFillCheckCircle className='text-primary'></AiFillCheckCircle>Top rated Instructors</span>
           </div>
            </div>
        </div>
    );
};

export default Mentor;