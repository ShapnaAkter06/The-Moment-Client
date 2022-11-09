import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
            .then(response => response.json())
            .then(data => setMyReviews(data))
    }, [])

    return (
        <div className="overflow-x-auto w-full my-12">
                <h2 className='text-2xl font-bold text-center mb-5'>My Review</h2>
                <table className="table mx-auto w-1/2 text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service name</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReviews.map(myReview => <MyReviewsCard
                                key={myReview._id}
                                myReview={myReview}
                            ></MyReviewsCard>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default MyReviews;