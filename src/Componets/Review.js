import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Review= () => {
    // const service=useLoaderData()
    const  {users}=useContext(AuthContext)
   const service=useLoaderData()

    const addReview=(event)=>{
        // event.preventDefault();
        const form=event.target
        const name=form.name.value;
        const email= users?.email || "unRegistered";
        const photo=form.photourl.value;
        const massage= form.massage.value;
        console.log(name , email, photo, massage)
    }
    return (
        <div>
            <div className="">
               {
                service.title
               }
            </div>
            <div className="">
                <div className="">
                    <p className="text-2xl-font-bold">our client say</p>
                </div>
                <form action='' className="my-4" >

                    <label htmlFor="my-modal" className="btn">Add Review</label>
                    <input type="checkbox" id="my-modal" className="modal-toggle" />

                    <div className="modal">
                        <div className="modal-box text-center">
                            <input name="name" type="text" placeholder="Name" className="input input-bordered w-full max-w-xs my-2" />
                            <input name="email "type="email" placeholder="Email" className="input input-bordered w-full max-w-xs my-2" defaultValue={users?.email} />
                            <input name='photourl' type="text" placeholder="Photo Url" className="input input-bordered w-full max-w-xs my-2" />
                            <textarea name='massage' cols="40" className="textarea textarea-bordered my-2" placeholder="You review"></textarea>
                           
                            <div className="modal-action">
                               <label htmlFor="my-modal" className="btn" onClick={addReview}>Submit</label>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Review;