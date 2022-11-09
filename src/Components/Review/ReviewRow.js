import React from 'react';

const ReviewRow = ({ review }) => {
    const { email, message, name, userPhoto, displayName } = review;
    // console.log(review);
    return (
        <tr>
            <td>
                {displayName}
            </td>
            <td>
                <img className='w-10 rounded-2xl' src={userPhoto} alt="" />
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