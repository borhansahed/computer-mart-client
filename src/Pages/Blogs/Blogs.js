import React from 'react';

const Blogs = () => {
    return (
        <>
            <div className='  flex justify-center items-center mt-10'>
               <div>
               <h2 className='text-xl lg:text-3xl'>How will you improve the performance of a React Application?</h2>
                <p className='w-96 lg:text-xl text-base'>Will more Explore   about react . Will
                    Add more Unique Features And will doing good Design for good user experience .</p>



                <h2  className='text-xl lg:text-3xl mt-3'> What are the different ways to manage a state in a React application?</h2>
                <p className='w-96 lg:text-xl text-base'>React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. For example, if we update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made</p>
                <h2 className='text-xl lg:text-3xl mt-3'>How does prototypical inheritance work?</h2>
                <p className='w-96 lg:text-xl text-base'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. </p>
                <h2 className='text-xl lg:text-3xl'> Why you do not set the state directly in React.  For example, <br />if you have const [products, setProducts] = useState([]). <br /> Why you do not set products = [...] instead, you use the setProducts</h2>
                <p className='w-96 lg:text-xl text-base mt-3'>First of all this  is functionality of react works.
                    And we set setProducts <br /> beacause setproducts do set everything in products ! its quite easier </p>

                <h2 className='text-xl lg:text-3xl mt-3'>What is a unit test? Why should write unit tests?</h2>
                <p className='w-96 lg:text-xl text-base'>Unit test is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development coding phase of an application by the developers.</p>
               </div>
            </div>
        </>
    );
};

export default Blogs;