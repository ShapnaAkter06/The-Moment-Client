import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Review = ({ setRender, name }) => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            name,
            customer: username,
            email,
            message,
        }

        fetch('http://localhost:5000/reviews', {
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
                    alert('Review successfully');
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
                    <input name='name' type="text" placeholder="Full Name" className="input input-bordered input-primary " />
                    <input name='email' type="text" placeholder="User Email" className="input input-bordered input-primary" defaultValue={user?.email} />
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