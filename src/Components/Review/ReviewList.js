import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const ReviewList = ({render,name}) => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    // console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${name}`)
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [user?.email, render])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
    //         .then(response => response.json())
    //         .then(data => setReviews(data))
    // }, [user?.email, render])

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <h2 className='text-4xl mb-12 text-center'>Review on my Work</h2>
                <table className="table w-4/5 mx-auto">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service name</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                            // handleDelete={handleDelete}
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewList;