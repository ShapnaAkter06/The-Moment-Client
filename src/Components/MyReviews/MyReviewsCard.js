import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewsCard = ({ myReview, handleDelete }) => {
    const { customer, email, message, name, _id } = myReview;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
                        X
                    </button>
                </label>
            </th>
            <td>
                {customer}
            </td>
            <td>
                {email}
            </td>
            <td>
                {name}
            </td>
            <td>
                {message}
            </td>
            <th>
                <Link to={`/update/${myReview._id}`}>
                    <button
                        className="btn btn-primary"> Edit Review
                    </button>
                </Link>
            </th>
        </tr>
    );
};

export default MyReviewsCard;