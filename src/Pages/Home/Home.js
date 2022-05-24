import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import FirstSection from './FirstSection';
import Footer from './Footer';
import HomeProducts from './HomeProducts';
import Review from './Review';
import SecondSection from './SecondSection';


const Home = () => {
    return (
        <>
        
         
        <div className='mt-4'>
            <Banner></Banner>
            <FirstSection></FirstSection>
            <HomeProducts></HomeProducts>
            <SecondSection></SecondSection>
           
            <BusinessSummary/>
             <Review/>
            <Footer></Footer>
        </div>
        
        </>
      
    );
};

export default Home;