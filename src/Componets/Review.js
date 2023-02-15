import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import ReviewItems from '../Share/ReviewItems';
import ServicesDetails from '../Share/ServicesDetails';

const Review = () => {
    // const service=useLoaderData()
    const { users } = useContext(AuthContext)
    const service = useLoaderData();
    const { _id, title } = service;
    const [review, setReview] = useState([])

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
                    alert('review add seccuse')
                    form.reset();
                }

            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?reviewid=${_id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [_id])
    console.log(review)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 py-4'>
            <div className="">
                {
                    title
                }
            </div>
            <div className="">
                <p className="text-2xl-font-bold">our client say</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                   {
                    review.map(rev=><ReviewItems
                    key={rev._id}
                    rev={rev}
                    ></ReviewItems>)
                   }
                </div>
                <div className="my-4" >

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