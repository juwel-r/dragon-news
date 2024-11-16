import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='pt-8 bg-gray-200 min-h-screen'>
            <header className='w-11/12 mt-8 mx-auto'>
                <Navbar/>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;