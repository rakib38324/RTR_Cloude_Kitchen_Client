import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt,FaEdit } from 'react-icons/fa';


const MyReviewCard = ({ reviews, handleDelete }) => {

    const { _id, customer,serviceId, review, img, date, time, serviceName, price } = reviews;



    return (
        <tr>

            <td><button onClick={() => handleDelete(_id)} className='btn bg-red-400 text-xl btn-active'><FaTrashAlt></FaTrashAlt></button></td>

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

            <Link to={`/editreview/${_id}`} >
                    <button className='btn  bg-green-500 text-xl '><FaEdit></FaEdit></button>
                </Link>


            </td>

        </tr>
    );
};

export default MyReviewCard;