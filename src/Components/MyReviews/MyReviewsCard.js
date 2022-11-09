import React from 'react';

const MyReviewsCard = ({myReview, handleDelete}) => {
    const { customer, email, message, name, _id } = myReview;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=> handleDelete(_id)} className="btn btn-ghost">
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
        </tr>
    );
};

export default MyReviewsCard;