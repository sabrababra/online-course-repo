import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import Mentor from '../../components/Mentor/Mentor';
import Trend from '../../components/Trend/Trend';
import WhatsNew from '../../components/WhatsNew/WhatsNew';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <WhatsNew></WhatsNew>
            <Trend></Trend>
            <Mentor></Mentor>
        </div>
    );
};

export default Home;