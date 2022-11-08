import React from 'react';
import Banner from '../Banner/Banner';
import DiscoverKitchen from '../DiscoverKitchen/DiscoverKitchen';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DiscoverKitchen></DiscoverKitchen>
            <Services></Services>
        </div>
    );
};

export default Home;