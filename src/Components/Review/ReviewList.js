import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const ReviewList = ({ render, name }) => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    // console.log(reviews);

    useEffect(() => {
        fetch(`https://assignment-11-server-gray.vercel.app/reviews?email=${name}`)
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [user?.email, render])

    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-5'>Review on my Work</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    reviews.map(review => <ReviewRow
                        key={review._id}
                        review={review}
                    ></ReviewRow>)
                }
            </div>
        </div>
    );
};

export default ReviewList;