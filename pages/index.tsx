import type { NextPage } from 'next';
import Head from 'next/head';
import HomepageHero from '../components/section/HomepageHero';
import styles from '../styles/Home.module.css';
import ServiceSection from '../components/section/Service';
import LearnMore from '../components/section/LearnMore';
import Howitworks from '../components/section/Howitworks/Howitworks';
import Whyanyworks from '../components/section/WhyAnyWorks/Whyanyworks';

const Home: NextPage = () => {
	return (
		<div>
			<div>
				<Head>
					<title>AnyWorkX | Home</title>
					<meta name='description' content='Generated by create next app' />
					 
				</Head>
				<main className='min-h-screen'>
					<div className={styles.homeBg}>
						<HomepageHero />
						<div className='mt-[50px] mb-[90px] lg:mb-[200px] '>
							<ServiceSection />
						</div>
					</div>

					<div className='mb-[80px] lg:mb-[120px]'>
						<LearnMore />
					</div>
					<Howitworks />
					<div className='container px-[33px] lg:px-[169px] py-[36px] lg:pt-[120px] pb-[100px] lg:pb-[200px]'>
						<Whyanyworks />
					</div>
				</main>
			</div>
		</div>
	);
};

export default Home;
