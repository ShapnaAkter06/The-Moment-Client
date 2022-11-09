import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Review = ({ setRender, name }) => {
    const { user } = useContext(AuthContext);

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const userPhoto = user?.photoURL;
        const displayName = user?.displayName;
        const message = form.message.value;

        const review = {
            name,
            email,
            message,
            userPhoto,
            displayName
        }

        fetch('https://assignment-11-server-gray.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRender((render) => !render)
                if (data.acknowledged) {
                    toast.success('Review successfully');
                    form.reset('')
                }
            })
            .catch(err => console.log(err));

    }
    return (
        <div>
            <form onSubmit={handleReview}>
                <div className='grid grid-cols-1 gap-4 my-12 mx-auto w-1/2'>
                    <h2 className='text-2xl font-bold text-center'>Add Review Here</h2>
                    <textarea name='message' className="textarea textarea-primary" placeholder="Review My Work"></textarea>
                    {
                        user?.uid ?
                            <>
                                <div className="form-control mt-6">
                                    <input className='btn btn-primary' type="submit" value="Review" />
                                </div>
                            </> :
                            <>
                                <div className='text-center'>
                                    <div className="form-control my-6">
                                        <input className='btn btn-primary' type="submit" value="Review" disabled/>
                                    </div>
                                    <p>Please Login to add a review <Link to='/login' className='text-blue-700 font-bold'>Login</Link> </p>
                                </div>
                            </>
                    }
                </div>
            </form>
        </div>
    );
};

export default Review;