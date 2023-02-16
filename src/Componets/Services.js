import React, { useEffect, useState } from 'react';
import Service from '../Share/service/Service';

const Services = () => {
const [services, setServices]=useState([]);

    useEffect(()=>{
    fetch("http://localhost:5000/allservice")
    .then(res=>res.json())
    .then(data=>setServices(data))    
    },[])

    return (
     
        <div className='p-5 my-4'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Our All Service</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                services.map(ser=><Service
                key={ser._id}
                ser={ser}
                ></Service>)
            }
         </div>
        </div>
    );
};

export default Services;