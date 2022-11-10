import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewsCard = ({ myReview, handleDelete }) => {
    const { email, message, name, _id, displayName} = myReview;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">
                    Service: {name}
                </h2>
                <h2>
                <div className="badge badge-secondary p-4">Review : {message}</div>
                </h2>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                        <button onClick={() => handleDelete(_id)}>
                            Delete Review
                        </button>
                    </div>
                    <div className="badge badge-outline">
                        <Link to={`/update/${_id}`}>
                            <button
                            > Edit Review
                            </button>
                        </Link>
                    </div>
                </div>
                <p> 
                    <small>{displayName}</small>
                    <br />
                    <small>{email}</small>
                </p>
            </div>
        </div >
    );
};

export default MyReviewsCard;