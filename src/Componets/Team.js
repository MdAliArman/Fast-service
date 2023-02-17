import React, { useEffect, useState } from 'react';

import TeamItems from '../Share/TeamItems';
const Team = () => {
    const [teams ,setTeam]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/team')
        .then(res=>res.json())
        .then(data=>setTeam(data))
    },[])
    return (
        <div>
            <div className="">
               
                    
                        <div className="my-5 ">
                            <h3 className="mb-3 text-2xl font-bold text-center">Experienced & Professional Team</h3>
                            <h6 className="w-1/2 mx-auto">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                        </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 my-7'>

                    {
                        teams.map(team=><TeamItems
                        key={team._id}
                        team={team}
                        ></TeamItems>)
                    }


                    </div>
                
            </div>
        </div>
    );
};

export default Team;