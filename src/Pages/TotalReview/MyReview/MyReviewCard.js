import React from 'react';


const MyReviewCard = ({ reviews,handleDelete }) => {

    const { _id, customer, review, img, date, time, serviceName, price } = reviews;

    

    return (
        <tr>

            <td><button onClick={()=>handleDelete(_id)}  className='btn btn-ghost'>X</button></td>

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

            <td>
                <textarea className="textarea w-full textarea-bordered" defaultValue={review} readOnly></textarea>
            </td>

            <td>
                <div className=''>
                    <button>edit</button>

                </div>
            </td>

        </tr>
    );
};

export default MyReviewCard;