import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html id='mainHtml'>
			<Head>
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
