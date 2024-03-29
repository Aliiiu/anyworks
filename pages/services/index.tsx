import type { NextPage } from 'next';
import Head from 'next/head';
import ServiceCard from '../../components/services/ServiceCard';
import Howitworks from '../../components/section/Howitworks/Howitworks';
import Image from 'next/image';
import Joinwaitlist from '../../components/section/WhyAnyWorks/Joinwaitlist';

const Services: NextPage = () => {
	const allServices = [
		{
			title: 'Quick Errands',
			image: '/images/services/service1.png',
			details:
				'Do you want to run quick errands but are too tired to do so? Relax, find someone to do it for you by clicking on the link.',
		},
		{
			title: 'Plumber',
			image: '/images/services/service2.png',
			details:
				'Are you looking for a competent plumber to fix your pipes and drainages? Tap the icon and select any of the qualified vendors.',
		},
		{
			title: 'Electrician',
			image: '/images/services/service3.png',
			details:
				'Are you looking to install electrical wiring or repair electrical equipment? We have the best electricians for you!',
		},
		{
			title: 'Hair Stylist',
			image: '/images/services/service4.png',
			details:
				'Are you that person who finds it inconvenient to visit the salon? Request for a professional hairstylist around you for home service.',
		},
		{
			title: 'Laundry',
			image: '/images/services/service5.png',
			details:
				'Get your clothes washed and ironed to perfection without leaving your comfort zone. We have laundry experts waiting for your call.',
		},
		{
			title: 'Food',
			image: '/images/services/service6.png',
			details:
				'Get your favorite delicacies delivered to you with just a click anywhere you are. Zero stress and affordable costs.',
		},
	];
	return (
		<div>
			<Head>
				<title>AnyWorkX | Services</title>
				<meta name='description' content='Generated by create next app' />
				 
			</Head>
			<main className='xl:mt-[144px] mt-[112px]'>
				<div className=' py-[30px] services-intro lg:px-[112px] px-[33px]'>
					<div className='container service-intro-content text-center md:w-[75%] w-full mx-[auto]'>
						<h3 className='text-primary text-[28px] md:mb-[10px] md:text-[36px] font-semibold'>
							Services
						</h3>
						<h3 className='text-[#1D2939] text-[24px] md:mb-[15px] md:text-[28px] leading-[30px] font-semibold'>
							Over 1K+ Vendors at your fingertip
						</h3>
						<p className='text-font-02 mt-3 lg:w-[70%] mx-auto'>
							We connect you with verified vendors around your vicinity to
							complete your requested services without difficulty. Below is a
							list of the most requested services that are available for you on
							the anyworkx app.
						</p>
					</div>
				</div>
				<div className='services bg-cyan mb-[116px]'>
					<div className='container services-content py-[90px] relative lg:px-[112px] px-[33px]'>
						<>
							<div className='absolute hidden lg:block left-0 top-[40px] z-[-1]'>
								<Image
									src='/images/circle.png'
									alt='circle'
									width={110}
									height={180}
								/>
							</div>
							<div className='absolute hidden lg:block bottom-0 right-0 z-[-1]'>
								<Image
									src='/images/circle2.png'
									alt='circle'
									width={110}
									height={180}
								/>
							</div>
							<div className='mlg:w-[74%] grid gap-[40px] mlg:grid-cols-3 msm:grid-cols-2 m-[auto]'>
								{allServices.map((service) => {
									return (
										<div key={service.title}>
											<ServiceCard service={service} />
										</div>
									);
								})}
							</div>
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
