import React from 'react';

const ReviewRow = ({ review }) => {
    const { customer, email, message, name, userPhoto } = review;
    // console.log(review);
    return (
        <tr>
            <td>
                {customer}
                <img src={userPhoto} alt="" />
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

export default ReviewRow;