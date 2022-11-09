import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewsCard = ({ myReview, handleDelete }) => {
    const { email, message, name, _id, displayName } = myReview;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-error font-bold">
                        X
                    </button>
                </label>
            </th>
            <td>
                {displayName}
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