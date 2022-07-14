import type { NextPage } from 'next';
import Head from 'next/head';
import ServiceCard from '../../components/services/ServiceCard';
import Howitworks from '../../components/section/Howitworks';
import Image from 'next/image';
import Joinwaitlist from '../../components/section/Joinwaitlist';

const Services: NextPage = () => {
	const allServices = [
		{
			title: 'Quick Errands',
			image: '/images/services/service1.png',
		},
		{
			title: 'Plumber',
			image: '/images/services/service2.png',
		},
		{
			title: 'Electrician',
			image: '/images/services/service3.png',
		},
		{
			title: 'Hair Stylist',
			image: '/images/services/service4.png',
		},
		{
			title: 'Laundry',
			image: '/images/services/service5.png',
		},
		{
			title: 'Food',
			image: '/images/services/service6.png',
		},
	];
	return (
		<div>
			<Head>
				<title>Anyworks | Services</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='shortcut icon' href='svgs/logo.svg' />
			</Head>
			<main className='xl:mt-[144px] mt-[112px]'>
				<div className=' py-[30px] services-intro lg:px-[112px] px-[33px]'>
					<div className='container  service-intro-content text-center md:w-[75%] w-full mx-[auto]  '>
						<h2 className='text-primary font-semibold text-lg'>Services</h2>
						<p className='text-font-01 py-2 font-bold'>
							Lorem ipsum dolor sit amet consectetur
						</p>
						<p className='text-xs text-font-02'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at
							donec mi diam leo aliquam non sagittis. Sapien auctor diam
						</p>
					</div>
				</div>
				<div className='services bg-cyan mb-[116px]'>
					<div
						className='container services-content py-[90px] relative grid gap-[40px] lg:px-[112px] px-[33px]'
						style={{
							gridTemplateColumns: 'repeat(auto-fill, minmax(214px, 1fr))',
						}}
					>
						<>
							<div className='absolute left-0 top-[40px] z-[-1]'>
								<Image
									src='/images/circle.png'
									alt='circle'
									width={110}
									height={180}
								/>
							</div>
							<div className='absolute bottom-0 right-0 z-[-1]'>
								<Image
									src='/images/circle2.png'
									alt='circle'
									width={110}
									height={180}
								/>
							</div>
							{allServices.map((service) => {
								return (
									<div key={service.title}>
										<ServiceCard service={service} />
									</div>
								);
							})}
						</>
					</div>
				</div>
				<Howitworks />
				<div className='sm:mb-[140px] mb-[60px]'>
					<div className='container lg:px-[112px] px-[33px]'>
						<Joinwaitlist />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Services;
