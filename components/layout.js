import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <div className='relative'>
            <div className='mb-20'>
                <Header />
            </div>
            <section className='sm:px-6 px-12 sm:py-16 py-10 min-h-[630px] mx-auto relative z-0'>
                {children}
            </section>
            <Footer />
        </div>
    );
};

export default Layout;