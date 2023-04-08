import { menu } from '@/assets';
import { close } from '@/assets';
import { navLinks } from '@/constant';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Header = () => {
    const router = useRouter();
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const [login, setLogin] = useState(null);

    const logout = () => {
        localStorage.removeItem('people');
        setLogin(null);
        router.push('/');
    }

    useEffect(() => {
        const people = localStorage.getItem('people');
        const login = JSON.parse(people);
        setLogin(login)
    }, [router]);


    return (
        <nav className='bg-slate-600 sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-10'>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className='flex items-center gap-2' onClick={() => {
                    setActive("");
                }}>
                    <img src='logo.png' alt="logo" className='w-16 h-16 object-contain' />
                    <p className='text-primary text-[18px] font-bold cursor-pointer flex'>Furniture</p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-4 md:gap-10'>
                    <li className={`${active === 'category' ? "text-secondary" : "text-white"} hover:text-secondary text-[18px] font-medium cursor-pointer`}
                        onClick={() => setActive('category')}>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0}>Category</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-slate-500 rounded-box w-52">
                                <li><Link href='/category/almirah' className='text-white'>Almirah</Link></li>
                                <li><Link href='/category/chair' className='text-white'>Chair</Link></li>
                                <li><Link href='/category/khat' className='text-white'>Khat</Link></li>
                                <li><Link href='/category/sofa' className='text-white'>Sofa</Link></li>
                                <li><Link href='/category/table' className='text-white'>Table</Link></li>
                            </ul>
                        </div>
                    </li>
                    {navLinks.map(link =>
                        <li
                            key={link.id}
                            className={`${active === link.title ? "text-secondary" : "text-white"} hover:text-secondary text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}>
                            <Link href={`${link.id}`}>{link.title}</Link>
                        </li>)}
                    <li className={`${active === 'login' ? "text-secondary" : "text-white"} hover:text-secondary text-[18px] font-medium cursor-pointer`}
                        onClick={() => setActive('login')}>
                        {login ? <div onClick={logout}><p className='absolute'>Logout</p><p className='relative top-7 text-[10px] opacity-40'>{login.name.slice(0, 10)}</p></div> : <Link href='/login'>Login</Link>}
                    </li>
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? 'close.svg' : 'menu.svg'}
                        alt="menu"
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)} />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-slate-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] pb-8 z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            <li
                                className={`${active === 'category' ? "text-secondary" : "text-white"} text-[16px] font-medium cursor-pointer`}
                                onClick={() => {
                                    setActive('login');
                                    setActive('category')
                                }}>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0}>Category</label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-slate-500 rounded-box w-52">
                                        <li onClick={() => setToggle(!toggle)}><Link href='/category/almirah' className='text-white'>Almirah</Link></li>
                                        <li onClick={() => setToggle(!toggle)}><Link href='/category/chair' className='text-white'>Chair</Link></li>
                                        <li onClick={() => setToggle(!toggle)}><Link href='/category/khat' className='text-white'>Khat</Link></li>
                                        <li onClick={() => setToggle(!toggle)}><Link href='/category/sofa' className='text-white'>Sofa</Link></li>
                                        <li onClick={() => setToggle(!toggle)}><Link href='/category/table' className='text-white'>Table</Link></li>
                                    </ul>
                                </div>                            </li>
                            {navLinks.map(link =>
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? "text-secondary" : "text-white"} text-[16px] font-medium cursor-pointer`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title)
                                    }}>
                                    <Link href={`${link.id}`}>{link.title}</Link>
                                </li>
                            )}
                            <li
                                className={`${active === 'login' ? "text-secondary" : "text-white"} text-[16px] font-medium cursor-pointer`}
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive('login')
                                }}>
                                {login ? <div onClick={logout}><p className='absolute '>Logout</p> <p className='relative top-7 text-[10px] opacity-40'>{login.name}</p></div> : <Link href='/login'>Login</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Header;