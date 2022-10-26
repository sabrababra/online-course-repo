import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Details/Details';
import Loading from '../Loading/Loading';

const SingleCourse = () => {
    const {id}=useParams();
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState({});
    useEffect(()=>{
        setLoading(true);
        fetch(`https://assignment-10-server-site-lac.vercel.app/course/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data);
            setLoading(false);
        })
    },[id])
  
    return (
      
        <div>
            {
                loading ? 
                <Loading></Loading>:
                <Details
                data={data}
                ></Details>
            }
        </div>
    );
};

export default SingleCourse;