import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
