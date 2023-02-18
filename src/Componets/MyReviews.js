import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider';
import Myreviewrow from '../Share/Myreviewrow';

const MyReviews = () => {
    const [myreview, setMyreview] = useState([]);
    const [refrech, setRefrech] = useState(false)
    const { users } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://y-zeta-one.vercel.app/reviews?email=${users?.email}`)
            .then(res => res.json())
            .then(data => setMyreview(data))
    }, [users?.email, refrech])

    const deletedHandle = (id) => {
        const proccesd = window.confirm('are you sure ?')
        if (proccesd) {
            fetch(`https://y-zeta-one.vercel.app/reviews/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {

                        setRefrech(!refrech)
                        toast.success("Deleted Suceessfully")
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Service Name</th>
                        <th>Review</th>
                        {/* <th>Favorite Color</th> */}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myreview.map(review => <Myreviewrow
                            key={review._id} review={review} deletedHandle={deletedHandle}
                        >

                        </Myreviewrow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;