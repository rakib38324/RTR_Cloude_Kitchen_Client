import React from 'react';

const TotalReview = ({ reviews }) => {
    const { _id, customer, review, img, date, time,costomerImg} = reviews;
    console.log(reviews._id)
    return (


        <tr>

            <td>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">

                            <img src={costomerImg} alt="" />

                        </div>
                    </div>


                </div>
            </td>
            <td>
                <div className=''>
                    <div className="font-bold">{customer}</div>
                    <div>{date}</div>
                    <div>{time}</div>

                </div>
            </td>
            <td>
                <textarea className="textarea w-full textarea-bordered" defaultValue={review} readOnly></textarea>
            </td>

        </tr>


    );



};

export default TotalReview;