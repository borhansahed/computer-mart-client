import React from 'react';

const AdminDashboard = () => {
    return (
        <article>
            <h1 className='text-4xl text-yellow-400'>Dashboard</h1>

            <div className='flex justify-center gap-10 mt-8 text-xl'>
                <div className='w-60 py-20 bg-yellow-400 shadow-xl'>
                    <h1>Total Revenue</h1>
                    <h1>$ 300</h1>
                </div>
                <div className='w-60 shadow-xl bg-yellow-400'>
                 <h1>Total Orders</h1>
                </div>
                <div className='w-60 shadow-xl bg-yellow-400'>
                 <h1>Total Revenue</h1>
                </div>
                
            </div>
        </article>
    );
};

export default AdminDashboard;