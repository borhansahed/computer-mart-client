import React from 'react';
import Banner from './Banner';
import FirstSection from './FirstSection';
import Footer from './Footer';
import HomeProducts from './HomeProducts';


const Home = () => {
    return (
        <>
        
         
        <div className='mt-4'>
            <Banner></Banner>
            <FirstSection></FirstSection>
            <HomeProducts></HomeProducts>
            <Footer></Footer>
        </div>
        
        </>
      
    );
};

export default Home;