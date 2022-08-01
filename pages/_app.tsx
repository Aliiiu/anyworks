import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';
import { WaitlistContextProvider } from '../context/waitlist-context';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<WaitlistContextProvider>
			<>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</>
		</WaitlistContextProvider>
	);
}

export default MyApp;
