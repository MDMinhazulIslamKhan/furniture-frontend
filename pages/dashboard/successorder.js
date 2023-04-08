import DashboardSidebar from '@/components/dashboardSidebar';
import Meta from '@/components/meta';
import { backend } from '@/constant';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SuccessOrder = ({ data }) => {
    const allOrder = data?.result;

    const [login, setLogin] = useState('wait');
    const router = useRouter();

    let orders = [];

    useEffect(() => {
        const people = localStorage.getItem('people');
        const log = JSON.parse(people);
        setLogin(log)
    }, []);

    if (!login) {
        router.push('/login')
    }

    return (<>
        <Meta title='Previous Order - Furniture' />
        <DashboardSidebar login={login}>
            <h1 className='text-center my-5 text-lg sm:text-2xl font-bold'>Previous Received Order</h1>
            <div className="overflow-x-auto px-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrder?.map((user, index) => {
                            return <>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>
                                        <ul className='ms-2 list-disc'>
                                            {user?.product.map(p => {
                                                return <li>{p.product}---{p.quantity}nos</li>
                                            })}
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="list-none">
                                            <li>{user.address}, {user.city}</li>
                                            <li>Phone: {user.phone}</li>
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

export const getServerSideProps = async (context) => {
    const { query } = context;
    const res = await fetch(`${backend}/order?id=${query.id}&status=ok`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }

}

export default SuccessOrder;