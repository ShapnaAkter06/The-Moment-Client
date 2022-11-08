import React from 'react';

const ReviewRow = ({ review }) => {
    const { customer, email, message } = review;
    console.log(review);
    return (
        <tr>

            <td>
                {customer}
            </td>
            <td>
                {email}
            </td>
            <td>
                {message}
            </td>
            {/* <td>
                <button onClick={()=> handleDelete(_id)}>
                <img className='w-8' src={eraseBtn} alt="" />
                </button>
            </td> */}
        </tr>
    );
};

export default ReviewRow;