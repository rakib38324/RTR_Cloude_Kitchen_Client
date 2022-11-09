import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthContextProvider';
import useTitle from '../../../Hooks/UseTitle';
import Banner from '../Banner/Banner';
import DiscoverKitchen from '../DiscoverKitchen/DiscoverKitchen';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
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
    return (
        <div>
            <Banner></Banner>
            <DiscoverKitchen></DiscoverKitchen>
            <Services></Services>
        </div>
    );
};

export default Home;