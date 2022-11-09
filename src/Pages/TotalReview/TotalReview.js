import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';

const TotalReview = ({ reviews }) => {

    const{loading} = useContext(AuthContext)
    if (loading) {
        return (
            <div >
                <progress className="progress progress-error w-56 mx-auto" value="0" max="100"></progress>
                <progress className="progress progress-error w-56 mx-auto" value="10" max="100"></progress>
                <progress className="progress progress-error w-56 mx-auto" value="40" max="100"></progress>
                <progress className="progress progress-error w-56 mx-auto" value="70" max="100"></progress>
                <progress className="progress progress-error w-56 mx-auto" value="100" max="100"></progress>
            </div>
        )
    }

    const { _id, customer, review, img, date, time,costomerImg} = reviews;
    // console.log(reviews._id)
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