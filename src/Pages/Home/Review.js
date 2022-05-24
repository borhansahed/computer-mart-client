import React from 'react';
import useReviews from '../../Hooks/UseReviews';
import '../Css/Review.css'

const Review = () => {
    const [reviews, setReviews] = useReviews();


    return (

        <>
            <div className='lg:mt-14'>
                <h4 className='lg:text-5xl text-3xl text-center'>What Clients Say <br />
                    <span className='text-4xl lg:text-6xl text-yellow-500 font-bold'>About Us</span></h4>
                <div>



                    <div className='all-reviews-container lg:ml-16 '>
                        <div className='all-reviews '>
                            {
                                reviews.reverse().slice(0, 3).map(review => <>

                                    <div >
                                        <div className='review-card hover:shadow-lg'>

                                           <div className='mt-9'>
                                               
                                            <p className='font-medium mx-auto text-xl '>"" {review.review.slice(0, 165)}...<span className='text-yellow-500 text-base'>See More</span></p>

                                           </div>
                                            <div class="avatar flex justify-center mt-5">
                                                <div class="w-16 rounded-full ">
                                                    <img src={review.picture} />
                                                </div>
                                                
                                            </div>
                                    <h4 className='text-center font-black text-xl lg:text-2xl mt-3 '>{review.name}</h4>

                                            <h4 className='mt-2 mb-3 text-center text-xl text-yellow-500'> {review.ratings} </h4>
                                        </div>
                                      
                                    </div>

                                </>)
                            }

                        </div>
                    </div>
                    <div className='text-center'>
                        <button className=' btn btn-outline text-base btn-sm btn-warning lg:btn lg:btn-outline  lg:text-xl mt-7  lg:mb-12 mb-10'>Add Your Review</button>
                    </div>

                </div>
            </div>
        </>

    );
};

export default Review;