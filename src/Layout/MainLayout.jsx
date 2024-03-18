import React from 'react';
import Header from '../Sheared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer';

const MainLayout = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default MainLayout;