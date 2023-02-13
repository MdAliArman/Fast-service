import React, { useEffect, useState } from 'react';
import Banner from '../Share/Banner/Banner';
import Service from '../Share/service/Service';

const Home = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    service.map(ser => <Service
                        key={ser._id}
                        ser={ser}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Home;