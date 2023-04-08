import DashboardSidebar from '@/components/dashboardSidebar';
import Meta from '@/components/meta';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [login, setLogin] = useState('wait');
    const router = useRouter();

    if (!login) {
        router.push('/login')
    }

    useEffect(() => {
        const people = localStorage.getItem('people');
        const login = JSON.parse(people);
        setLogin(login);
    }, []);
    return (
        <>
            <Meta title='Furniture - Dashboard' />
            <DashboardSidebar login={login}>
                <h1 className='text-center my-5 text-primary text-lg sm:text-2xl font-bold'>Welcome to {login?.x === '111' ? 'Admin' : 'Your'} Dashboard</h1>
                <div className='mx-5 p-5 h-80 rounded-lg bg-white'>
                    <h2 className='text-xl font-bold text-center'>{login?.name}</h2>
                    <p className='text-md font-normal text-center'>+88{login?.phone}</p>

                    {login?.x === '000' && <>
                        <h1 className='text-center mt-5 mb-3 text-primary text-lg sm:text-2xl font-semibold'>For getting admin access</h1>
                        <h2 className='text-secondary font-bold text-center'>Phone Number: 01521438469 <br />Password: aaaaaa</h2>
                    </>}
                </div>
            </DashboardSidebar>
        </>
    );
};

export default Dashboard;