import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';
import Head from 'next/head';
import { WaitlistContextProvider } from '../context/waitlist-context';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const displayPageLayout = router.query.hideLayout === 'true' ? false : true;
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#7e00c4' />
				<meta
					name='description'
					content='We connect you to verified and professional service providers within your geo-location.'
				/>
				<meta
					name='keywords'
					content='Anyworks, artisans, Plumber,
		  Electrician,
		  Hair Stylist,
		  Laundry,
		  Auto Engineer,
		  Cable Engineer/Installation Expert,
		  Make-up Artists,
		  Carpenter/Furniture Expert,
		  Pharmacist/Medical Expert,
		  Mobile Engineer,
		  Food Vendors'
				/>
				{/* <meta property="image:alt_text" content="Stitchvine logo in white on purple background" /> */}
				<meta property='og:site_name' content='Anyworks' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://www.anyworks-ng.com' />
				<meta
					property='og:description'
					content='We connect you to verified and professional service providers within your geo-location.'
				/>
				<meta
					property='og:image'
					content='https://www.anyworks-ng.com/images/favicon.jpg'
				/>
				{/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Growth tools to upscale your fashion business." />
        <meta name="twitter:site" content="@stitchvine" />
        <meta name="twitter:title" content="Stitchvine | Fashion Made Easy" />
        <meta name="twitter:creator" content="@stitchvine" /> */}
				<meta property='og:url' content='https://www.anyworks-ng.com' />
				<meta name='twitter:image' content='/icon.png' />

				<link
					rel='shortcut icon'
					href='https://www.anyworks-ng.com/images/favicon.jpg'
				/>
			</Head>

			<WaitlistContextProvider>
				<>
					{displayPageLayout && <Header />}
					<Component {...pageProps} />
					{displayPageLayout && <Footer />}
				</>
			</WaitlistContextProvider>
		</>
	);
}

export default MyApp;
