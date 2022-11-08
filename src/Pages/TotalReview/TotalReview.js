import React from 'react';

const TotalReview = ({ reviews }) => {
    const { _id, customer, review, img, date, time } = reviews;
    console.log(reviews._id)
    return (
        

            <tr>

                <td>
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="rounded w-24 h-24">

                                <img src={img} alt="" />

                            </div>
                        </div>


                    </div>
                </td>
                <td>
                    <div className=''>
                        <div className="font-bold">{customer}</div>
                        <div className="font-bold">{date}</div>
                        <div className="font-bold">{time}</div>

                    </div>
                </td>
                <td>{review}</td>

            </tr>


    );


            
};

            export default TotalReview;