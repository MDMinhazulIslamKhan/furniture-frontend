import Image from 'next/image';
import { facebook, github, gmail, linkedin, logo, phone } from '../assets/index';


const Footer = () => {
    return (
        <div className="bg-slate-600 w-full" id='about'>
            <div className="flex gap-1 items-center justify-center mb-5">
                <Image src={logo} className='w-7' alt="" />
                <p className='text-center sm:text-[18px] text-[14px] mt-4 text-white uppercase font-bold tracking-wider'>Md. Minhazul Islam Khan</p>
                <Image src={logo} className='w-7' alt="" />
            </div>
            <div className="flex sm:flex-row flex-col justify-around overflow-hidden">
                <div className="flex flex-col gap-2">
                    <a href="mailto:minhazulislamkhan@gmail.com" className="flex gap-4 items-center text-xs">
                        <Image src={gmail} className="w-8" alt="" />
                        <p className='text-white hover:text-secondary'>minhazulislamkhan@gmail.com</p>
                    </a>
                    <a href="tel:+8801521438469" className="flex gap-4 items-center text-xs">
                        <Image src={phone} className="w-8" alt="" />
                        <p className='text-white hover:text-secondary'>Contact: +8801521438469</p>
                    </a>
                    <a href="https://github.com/MDMinhazulIslamKhan" className="flex gap-4 items-center text-xs" target='_blank'>
                        <Image src={github} className="w-8" alt="" />
                        <p className='text-white hover:text-secondary'>github.com/mdminhazulislamkhan</p>
                    </a>
                </div>
                <div className="flex flex-col justify-center mt-2 sm:mt-0 gap-2">
                    <a href="https://www.facebook.com/mdminhazulislam.khan.77" className="flex gap-4 items-center text-xs" target='_blank'>
                        <Image src={facebook} className="w-7" alt="" />
                        <p className='text-white hover:text-secondary'>facebook.com/mdminhazulislam.khan.77</p>
                    </a>
                    <a href="https://www.linkedin.com/in/md-minhazul-islam-khan-53aa5822a/" className="flex gap-4 items-center text-xs" target='_blank'>
                        <Image src={linkedin} className="w-7" alt="" />
                        <p className='text-white hover:text-secondary'> Md. Minhazul Islam Khan</p>
                    </a>
                </div>
            </div>
            <p className="text-center text-white text-xs mt-3 mb-0">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
    );
};

export default Footer;