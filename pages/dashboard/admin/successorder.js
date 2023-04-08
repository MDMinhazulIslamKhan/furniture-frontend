import DashboardSidebar from '@/components/dashboardSidebar';
import Meta from '@/components/meta';
import { backend } from '@/constant';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SuccessOrder = ({ data }) => {
    const allOrder = data.result;

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
        <Meta title='Delivered Order - Admin Dashboard' />
        <DashboardSidebar login={login}>
            <h1 className='text-center my-5 text-lg sm:text-2xl font-bold'>Delivered Order</h1>
            <div className="overflow-x-auto px-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer</th>
                            <th>Shipping Address</th>
                            <th>Products</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrder?.map((user, index) => {
                            return <>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>
                                        <ul className="list-none">
                                            <li>{user.address}, {user.city}</li>
                                            <li>Phone: {user.phone}</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className='ms-2 list-disc'>
                                            {user?.product.map(p => {
                                                return <li>{p.product}---{p.quantity}nos</li>
                                            })}
                                        </ul>
                                    </td>
                                    <td>{user?.price} tk</td>
                                </tr >
                            </>
                        })}
                    </tbody>
                </table>
            </div>
        </DashboardSidebar>
    </>
    );
};

export const getServerSideProps = async () => {
    const res = await fetch(`${backend}/allorder?status=ok`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }

}

export default SuccessOrder;