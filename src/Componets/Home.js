import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Share/Banner/Banner';
import Service from '../Share/service/Service';
import Skill from './Skill';
import Team from './Team';

const Home = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch("https://y-zeta-one.vercel.app/service")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="py-4">
                <h2 className="text-xl font-bold text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-4">
                    {
                        service.map(ser => <Service
                            key={ser._id}
                            ser={ser}
                        ></Service>)
                    }
                </div>

                <div className="card-actions justify-center">
                    <Link to='/service'><button className="btn btn-active btn-primary mx-auto">See More</button></Link>
                </div>
            </div>
            <Team></Team>
            <Skill></Skill>
        </div>
    );
};

export default Home;