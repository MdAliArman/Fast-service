import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import {  useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import ReviewItems from '../Share/ReviewItems';
import ServicesDetails from '../Share/ServicesDetails';

const Review = () => {
    const { users } = useContext(AuthContext)
    const service = useLoaderData();
    const { _id, title } = service;
    const [review, setReview] = useState([])
    console.log(review)
    const addReview = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const email = users?.email || "unRegistered";
        const photo = form.photourl.value;
        const massage = form.massage.value;

        const review = {
            reviewid: _id,
            serviceName: title,
            customarName: name,
            email,
            photo,
            massage
        };

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Added Successfully')
                    form.reset();
                }

            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [_id])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 py-4 gap-5'>
            <div className="">
                <ServicesDetails service={service}></ServicesDetails>
            </div>
            <div className="">


                <h1 className="text-2xl font-bold text-center">Our client Say</h1>
                {
                    review.length === 0 ?
                        <h1 className='text-xl font-semibold text-green-600'>Please Add Review !!!!</h1>
                        :
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                            {
                                review.map(rev => <ReviewItems
                                    key={rev._id}
                                    rev={rev}
                                ></ReviewItems>)
                            }
                        </div>
                }
                <div className="my-4 block justify-items-center" >

                    <label htmlFor="my-modal" className="btn">Add Review</label>
                    <input type="checkbox" id="my-modal" className="modal-toggle" />

                    <div className="modal">

                        <div className="modal-box text-center">

                            <form onSubmit={addReview}>

                                <input name="name" type="text" placeholder="Name" className="input input-bordered w-full max-w-xs my-2" />
                                <input name="email " type="email" placeholder="Email" className="input input-bordered w-full max-w-xs my-2" defaultValue={users?.email} readOnly />
                                <input name='photourl' type="text" placeholder="Photo Url" className="input input-bordered w-full max-w-xs my-2" />
                                <textarea name='massage' cols="40" className="textarea textarea-bordered my-2" placeholder="You review"></textarea>



                                <div className="modal-action">

                                    <label className="btn"><button>Submit</button></label>
                                    <label htmlFor="my-modal" className="btn">Close</label>
                                </div>

                            </form>


                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Review;