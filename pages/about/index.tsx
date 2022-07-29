import type { NextPage } from 'next';
import Head from 'next/head';
import Joinwaitlist from '../../components/section/Joinwaitlist';
import LoveToHear from '../../components/contact/LoveToHear';
import Image from 'next/image';

const About: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Anyworks | About Us</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='shortcut icon' href='svgs/logo.svg' />
			</Head>
			<main className='xl:mt-[144px] mt-[112px]'>
				<div className=' py-[30px] about-intro'>
					<div className='relative container'>
						<div className='absolute left-0 hidden lg:block top-[50px] z-[-1]'>
							<Image
								src='/images/circle.png'
								alt='circle'
								width={110}
								height={180}
							/>
						</div>
						<div className='absolute bottom-[5px] hidden lg:block right-0 z-[-1]'>
							<Image
								src='/images/circle2.png'
								alt='circle'
								width={110}
								height={180}
							/>
						</div>
						<div className=' about-intro-content lg:px-[112px] px-[33px] text-center md:w-[75%] w-full mx-[auto]  '>
							<h2 className='text-[#7e00c4] font-semibold text-lg'>About Us</h2>
							<p className='text-font-01 py-2 font-bold'>
								We do things differently...
							</p>
							<p className='text-xs text-font-01'>
								Anyworks is the bridging gap between users looking for help with
								their domestic needs and experienced artisans who can deliver
								quality services.
							</p>

							<div className='mission-vision mt-[75px] flex flex-col gap-[54px]'>
								<div className='mission'>
									<h2 className='text-[#7e00c4] font-semibold text-base'>
										Mission
									</h2>
									<p className='text-xs text-font-01'>
										Our mission is to reduce job anxiety by pairing individuals
										with artisans to execute all your daily needs.
									</p>
								</div>
								<div className='vision'>
									<h2 className='text-[#7e00c4] font-semibold text-base'>
										Vision
									</h2>
									<p className='text-xs text-font-01'>
										Our vision is to position artisans all around the globe for
										anyone who needs their services.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-white py-[80px] contact'>
					<LoveToHear />
				</div>
				<div className='mb-[140px]'>
					<div className='container lg:px-[112px] px-[33px]'>
						<Joinwaitlist />
					</div>
				</div>
			</main>
		</div>
	);
};

export default About;
