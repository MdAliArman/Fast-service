import React from 'react';

const ReviewItems = ({rev}) => {
    const {customarName,email,massage, photo }=rev;
    return (
        <div className='p-5 shadow-xl'>
            <div className="flex flex-row  items-center mb-4">
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src={photo} alt='' />
                    </div>
                </div>
                <div className="ml-4 mb-3">
                    <h1 className="text-xl font-semibold">{customarName}</h1>
                    <p>{email}</p>
                </div>
                
            </div>
            {
                massage.length > 170 ?
                <p>{massage.slice(0, 170)+"..."}</p>
                :
                <p>{massage}</p>
            }
        </div>
    );
};

export default ReviewItems;