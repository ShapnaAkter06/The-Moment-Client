import React from 'react';

const MyReviewsCard = ({myReview}) => {
    const { customer, email, message, name } = myReview;
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

export default MyReviewsCard;