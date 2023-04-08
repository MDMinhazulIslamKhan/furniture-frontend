import DashboardSidebar from '@/components/dashboardSidebar';
import Meta from '@/components/meta';
import { backend } from '@/constant';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const AllUser = ({ data }) => {
    const allUser = data.result;
    const [login, setLogin] = useState('wait');
    const router = useRouter();

    if (login?.x === '000') {
        router.push('/dashboard/checkout')
    }
    else if (!login) {
        router.push('/login')
    }

    useEffect(() => {
        const people = localStorage.getItem('people');
        const login = JSON.parse(people);
        setLogin(login);
    }, []);


    return (<>
        <Meta title='All users - Admin Dashboard' />
        <DashboardSidebar login={login}>
            <h1 className='text-center my-5 text-lg sm:text-2xl font-bold'>All User</h1>
            <div className="overflow-x-auto px-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUser?.map((user, index) => {
                            return <>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>+88{user?.phone}</td>
                                    <td className={`${user?.role === '111' && 'text-primary font-semibold'}`}>{user?.role === '111' ? 'Admin' : 'User'}</td>
                                </tr >
                            </>
                        })}
                    </tbody>
                </table>
            </div>
        </DashboardSidebar >
    </>
    );
};

export const getServerSideProps = async () => {
    const res = await fetch(`${backend}/allpublic`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }

}


export default AllUser;