import React from 'react';

const ReviewRow = ({ review }) => {
    const { customer, email, message, name } = review;
    // console.log(review);
    return (
        <tr>
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

export default ReviewRow;