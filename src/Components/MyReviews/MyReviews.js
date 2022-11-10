import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([]);
    useTitle('My Reviews');

    useEffect(() => {
        fetch(`https://assignment-11-server-gray.vercel.app/myReviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('the-moment')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setMyReviews(data))
    }, [user?.email, logOut])



    // for delete
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure want to delete this review?");
        if (proceed) {
            fetch(`https://assignment-11-server-gray.vercel.app/myReviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('the-moment')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Successfully deleted')
                        const remaining = myReviews.filter(myRev => myRev._id !== id);
                        setMyReviews(remaining)
                    }
                })
        }
    }

    return (
        <div className='flex justify-center items-center'>
            {myReviews[0]?._id ? (<>
                <div className="my-12">
                    <h2 className='text-2xl font-bold text-center mb-5'>My Review</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12'>
                        {
                            myReviews.map(myReview => <MyReviewsCard
                                key={myReview._id}
                                myReview={myReview}
                                handleDelete={handleDelete}
                            ></MyReviewsCard>)
                        }
                    </div>
                </div>
            </>) : <><h1 className='text-center text-4xl my-12 text-red-700 font-bold'>No review were added</h1></>}
        </div>
    );
};

export default MyReviews;