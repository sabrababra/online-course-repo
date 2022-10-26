import React from 'react';
import join from '../../assets/icon/join.png'
const WhatsNew = () => {
    return (
        <div className='grid grid-cols-5 my-8'>
            <div className='col-span-5 lg:col-span-3 w-10/12 mx-auto my-auto '>
                <h3 className='text-xl text-primary font-medium mb-3'>What’s New</h3>
                <h1 className='text-4xl font-semibold mb-5'>Master the skills to drive your career</h1>
                <p>Get certified, master modern tech skills, and level up your career — whether you’re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.</p>
            </div>
            <div className='col-span-3 lg:col-span-2'>
                <img src={join} alt="" />
            </div>
        </div>
    );
};

export default WhatsNew;