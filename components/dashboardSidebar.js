import Link from 'next/link';
import React from 'react';

const DashboardSidebar = (props) => {
    return (
        <div className="drawer drawer-mobile p-3 h-full">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-full bg-slate-50">
                <label htmlFor="dashboard-drawer" className="drawer-button lg:hidden"><img src="menu.svg" alt="menu" className='bg-slate-300 w-14 h-14 p-2 rounded-lg' /></label>
                {props.children}
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 bg-base-100 text-base-content h-full font-semibold">
                    {props?.login?.x === '111' &&
                        <>
                            <li><Link href='/dashboard/admin/alluser' className='hover:text-primary'>All user</Link></li>
                            <li><Link href='/dashboard/admin/pendingorder' className='hover:text-primary'>User Pending Order</Link></li>
                            <li><Link href='/dashboard/admin/successorder' className='hover:text-primary'>Delivered Order</Link></li>
                        </>
                    }
                    <li><Link href='/dashboard/checkout' className='hover:text-primary'>Checkout</Link></li>
                    <li><Link href={`/dashboard/pendingorder?id=${props?.login?.id}`} className='hover:text-primary'>My Order</Link></li>
                    <li><Link href={`/dashboard/successorder?id=${props?.login?.id}`} className='hover:text-primary'>Received Order</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardSidebar;