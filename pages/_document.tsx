import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html id='mainHtml'>
			<Head>
				{/* <link
					href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap'
					rel='stylesheet'
				/> */}
				<link rel='stylesheet' href='https://use.typekit.net/azs0uui.css' />
			</Head>
			<body>
				<Main />
				<div id='backdrop-root'></div>
				<div id='overlay-root'></div>
				<NextScript />
			</body>
		</Html>
	);
}
