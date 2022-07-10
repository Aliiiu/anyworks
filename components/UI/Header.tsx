import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link'

const Header: FC<{}> = () => {
    const [headerStyle, setHeaderStyle] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setHeaderStyle(window.pageYOffset > 50)
            );
        }
    }, []);
    return (
        <>
            <div className={`z-10  py-[15px] top-0  fixed w-[100%] ${headerStyle ? "bg-white shadow-sm" : ""
                }`}>
                <div className='container'>
                    <header className='flex items-center justify-between'>

                        <Link href='/'>
                            <Image
                                className='cursor-pointer'
                                src={'/images/anyworks-logo.png'}
                                alt='anyworks logo'
                                height={45}
                                width={137}
                            />
                        </Link>
                        <nav className='md:hidden'>
                            <ul className='flex gap-x-[64px]'>
                                <li className='nav-link'>
                                    <Link href='/services'>Services</Link>
                                </li>
                                <li className='nav-link'><Link href='#'>FAQ</Link></li>
                            </ul>
                        </nav>
                        <Button styles='bg-primary md:hidden' content='Join the Waitlist' />
                        <Image
                            className='cursor-pointer'
                            src={'/svgs/menu.svg'}
                            alt='menu'
                            height={45}
                            width={45}
                        />
                    </header>
                </div>

            </div>
        </>
    );
};

export default Header;
