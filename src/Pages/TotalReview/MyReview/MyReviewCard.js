import React from 'react';

const MyReviewCard = ({ reviews }) => {

    const { _id, customer, review, img, date, time, costomerImg, serviceName, price } = reviews;

    return (
        <tr>

            <td>
                <div>
                    <div >{date}</div>
                    <div >{time}</div>
                </div>
            </td>

            <td>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">

                            <img src={img} alt="" />

                        </div>
                        <div className='pt-5 pl-3'>
                            <div className="font-bold">{serviceName}</div>
                            <div className="font-bold">Price: ${price}</div>
                        </div>
                    </div>
                </div>
            </td>

            



            <td>{review}</td>
            <td>
                <div className=''>
                    <button>edit</button>

                </div>
            </td>

        </tr>
    );
};

export default MyReviewCard;