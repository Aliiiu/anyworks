import Image from 'next/image';
import Head from 'next/head';
import Table from '../../components/UI/Table';
import definitions from '../../constants/definitions';
import cookies from '../../constants/cookies';

const Privacypolicy = () => {
	const definitionHeader = [
		{
			title: 'word',
			render: (row: any) => <h5 className='font-bold'>{row.word}</h5>,
		},
		{
			title: 'definition',
			render: (row: any) => `${row.definition}`,
		},
	];

	const cookiesHeader = [
		{
			title: 'Type of Cookie',
			render: (row: any) => `${row.type}`,
		},
		{
			title: 'Purpose',
			render: (row: any) => `${row.purpose}`,
		},
	];
	return (
		<div>
			<Head>
				<title>AnyWorkX | Privacy Policy</title>
				<meta name='description' content='Generated by create next app' />
			</Head>
			<div className='container relative'>
				<div className='absolute hidden lg:block left-0 top-[100px]'>
					<Image
						src='/images/circle.png'
						alt='circle point'
						width={'110px'}
						height={'180px'}
					/>
				</div>
				<div className='absolute hidden lg:block right-0 bottom-0'>
					<Image
						src='/images/circle2.png'
						alt='circle point'
						width={'110px'}
						height={'180px'}
					/>
				</div>
				<div className='xl:mt-[144px] mt-[112px] mb-[65px] lg:mb-[100px] px-[33px] lg:px-[234px]'>
					<h2 className='lg:mb-[38px] mb-[20px] text-center text-primary'>
						Privacy Policy
					</h2>
					<p className='mb-[15px] xl:mb-[25px]'>
						(We, our, or us) is committed to protecting your privacy. This
						Privacy Policy explains how your personal information is collected,
						used, and disclosed by ANYWORKX. This Privacy Policy applies to our
						website: www.anyworkx-ng.com, and its associated subdomains
						(collectively, our Service) alongside our applications, AnyWorkX and
						AnyWorkX - Vendor. ANYWORKX takes the privacy of your information
						very seriously. By accessing or using our Service, you signify that
						you have read, understood, and agree to our collection, storage,
						use, and disclosure of your personal information as described in
						this Privacy Policy and our Terms of Service. <br />
					</p>
					<h5 className='font-bold text-primary'>
						Please read this privacy policy carefully.
					</h5>
					<br />
					<h3 className='text-primary text-2xl text-left'>
						Definitions and interpretation
					</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>1.</span> In this privacy policy,
						the following definitions are used:
					</p>
					<Table
						rows={definitions}
						headers={definitionHeader}
						showHead={false}
					/>
					<p>
						<span className='font-bold mr-3'>2.</span> In this privacy policy,
						unless the context requires a different interpretation: <br />
						a. the singular includes the plural and vice versa; <br />
						b. references to sub-clauses, clauses, schedules or appendices are
						to sub-clauses, clauses, schedules or appendices of this privacy
						policy; <br /> c. a reference to a person includes firms, companies,
						government entities, trusts and partnerships; <br /> d.
						&apos;including&apos; is understood to mean &apos;including without
						limitation&apos;; <br /> e. reference to any statutory provision
						includes any modification or amendment of it; <br /> f. the headings
						and sub-headings do not form part of this privacy policy. <br />
					</p>
					<h3 className='text-primary text-2xl text-left'>
						Scope of this privacy policy
					</h3>
					<p>
						<span className='font-bold mr-3'>3.</span> This privacy policy
						applies only to the actions of ANYWORKX and Customers with respect to
						this Website. It does not extend to any websites that can be
						accessed from this Website including, but not limited to, any links
						we may provide to social media websites. <br />
						<span className='font-bold mr-3'>4.</span> For purposes of the
						applicable Data Protection Laws, ANYWORKX is the &apos;data
						controller&apos;. This means that ANYWORKX determines the purposes
						for which, and the manner in which, your Data is processed.
					</p>
					<br />
					<h3 className='text-primary text-2xl text-left'>Data collected</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>5.</span>We collect information
						from you when you visit our service, register, place an order,
						subscribe to our newsletter, respond to a survey or fill out a form.{' '}
						<br />
						a. Name; <br /> b. Date of birth; <br />
						c. Gender; <br />
						d. Job Title; <br /> e. Profession; <br />
						f. Contact Information such as email addresses and telephone
						numbers; <br /> g. Demographic information such as postcode,
						preferences and interests; <br /> h. Financial information such as
						credit / debit card numbers; <br /> i. IP address (automatically
						collected); <br /> j. Web browser type and version (automatically
						collected); <br /> k. Operating system (automatically collected);{' '}
						<br /> l. a list of URLs starting with a referring site, your
						activity on this Website, and the site you exit to (automatically
						collected); <br /> m. Location <br /> n. Password <br />
						In each case, in accordance with this privacy policy.
					</p>
					<h3 className='text-primary text-2xl text-left'>
						How we collect Data
					</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>6.</span>We collect Data in the
						following ways: <br /> a. data is given to us by you; <br /> b. data
						is received from other sources; <br /> c. Depending on the Services
						that you use, your app settings or device permissions, we collect
						location data through data such as GPS and IP address. <br /> d.
						AnyWorkX collects location information to enable realtime location
						tracking in the background <br />
						e. data is collected automatically.
					</p>
					<h3 className='text-primary text-2xl text-left'>
						Data that is given to us by you
					</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>7.</span> ANYWORKX will collect
						your Data in a number of ways, for example: <br /> a. when you
						contact us through the Website, by telephone, post, e-mail or
						through any other means; <br /> b. when you register with us and set
						up an account to receive our products/services; <br /> c. when you
						complete surveys that we use for research purposes (although you are
						not obliged to respond to them); <br />
						d. when you enter a competition or promotion through a social media
						channel; <br /> e. when you make payments to us, through this
						Website or otherwise; <br /> f. when you elect to receive marketing
						communications from us; <br /> g. when you use our services; <br />{' '}
						h. none; <br /> in each case, in accordance with this privacy
						policy.
					</p>
					<h3 className='text-primary text-2xl text-left'>
						Data that is received from third parties
					</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>8.</span> ANYWORKX will receive
						Data about you from the following third parties: <br /> a.
					</p>
					<h3 className='text-primary text-2xl text-left'>
						Data that is received from publicly available third parties sources
					</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>9.</span> We will receive Data
						about you from the following publicly available third party sources:{' '}
						<br /> a.
					</p>
					<h3 className='text-primary text-2xl text-left'>
						Data that is collected automatically
					</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>10.</span> To the extent that you
						access the Website, we will collect your Data automatically, for
						example: <br /> a. we automatically collect some information about
						your visit to the Website. This information helps us to make
						improvements to Website content and navigation, and includes your IP
						address, the date, times and frequency with which you access the
						Website and the way you use and interact with its content. <br /> b.
						we will collect your Data automatically via cookies, in line with
						the cookie settings on your browser. For more information about
						cookies, and how we use them on the Website, see the section below,
						headed &apos;Cookies&apos;.
					</p>
					<h3 className='text-primary text-2xl text-left'>Our use of Data</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>11.</span> Any or all of the above
						Data may be required by us from time to time in order to provide you
						with the best possible service and experience when using our
						Website. Specifically, Data may be used by us for the following
						reasons: <br /> a. internal record keeping; <br /> b. improvement of
						our products / services; <br /> c. contact for market research
						purposes which may be done using email, telephone, fax or mail. Such
						information may be used to customise or update the Website; in each
						case, in accordance with this privacy policy. <br />{' '}
						<span className='font-bold mr-3'>12</span>. We may use your Data for
						the above purposes if we deem it necessary to do so for our
						legitimate interests. If you are not satisfied with this, you have
						the right to object in certain circumstances (see the section headed
						&apos;Your rights&apos; below). <br />
						<span className='font-bold mr-3'>13.</span> When you register with
						us and set up an account to receive our services, the legal basis
						for this processing is the performance of a contract between you and
						us and/or taking steps, at your request, to enter into such a
						contract.
					</p>
					<h3 className='text-primary text-2xl text-left'>
						Who we share Data with
					</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>14.</span> We may share your Data
						with the following groups of people for the following reasons:{' '}
						<br />
						a. our employees, agents and/or professional advisors - to resolve
						issues; <br /> b. third party vendors who provide services
						to us which require the processing of personal data - for support;{' '}
						<br /> c. third party payment providers who process payments made
						over the Website - for authentication ; <br /> in each case, in
						accordance with this privacy policy.
					</p>
					<h3 className='text-primary text-2xl text-left'>
						Keeping Data secure
					</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>15.</span> We will use technical
						and organisational measures to safeguard your Data, for example:{' '}
						<br /> a. access to your account is controlled by a password and a
						username that is unique to you. <br /> b. we store your Data on
						secure servers. <br /> c. payment details are encrypted using SSL
						technology (typically you will see a lock icon or green address bar
						(or both) in your browser when we use this technology. <br />{' '}
						<span className='font-bold mr-3'>16.</span> We are certified to ISO
						27001. This family of standards helps us manage your Data and keep
						it secure. <br />
						<span className='font-bold mr-3'>17.</span> Technical and
						organisational measures include measures to deal with any suspected
						data breach. If you suspect any misuse or loss or unauthorised
						access to your Data, please let us know immediately by contacting us
						via this e-mail address: anyworksng@gmail.com. <br />{' '}
						<span className='font-bold mr-3'>18.</span> If you want detailed
						information from Get Safe Online on how to protect your information
						and your computers and devices against fraud, identity theft,
						viruses and many other online problems, please visit
						<a
							className='ml-3 text-primary'
							href='http://www.getsafeonline.org'
						>
							www.getsafeonline.org
						</a>
						. Get Safe Online is supported by HM Government and leading
						businesses.
					</p>
					<h3 className='text-primary text-2xl text-left'>Data retention</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>19.</span> Unless a longer
						retention period is required or permitted by law, we will only hold
						your Data on our systems for the period necessary to fulfil the
						purposes outlined in this privacy policy or until you request that
						the Data be deleted. <br />{' '}
						<span className='font-bold mr-3'>20.</span> Even if we delete your
						Data, it may persist on backup or archival media for legal, tax or
						regulatory purposes.
					</p>
					<h3 className='text-primary text-2xl text-left'>Your rights</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>21.</span> You have the following
						rights in relation to your Data: <br />{' '}
						<span className='font-semibold'>a.</span> Right to access - the
						right to request <br /> (i) copies of the information we hold about
						you at any time, or <br />
						(ii) that we modify, update or delete such information. If we
						provide you with access to the information we hold about you, we
						will not charge you for this, unless your request is
						&quot;manifestly unfounded or excessive.&quot; Where we are legally
						permitted to do so, we may refuse your request. If we refuse your
						request, we will tell you the reasons why. <br />{' '}
						<span className='font-semibold'>b.</span> Right to correct - the
						right to have your Data rectified if it is inaccurate or incomplete.{' '}
						<br />
						<span className='font-semibold'>c.</span> Right to erase - the right
						to request that we delete or remove your Data from our systems.{' '}
						<br /> <span className='font-semibold'>d.</span> Right to restrict
						our use of your Data - the right to &quot;block&quot; us from using
						your Data or limit the way in which we can use it. <br />{' '}
						<span className='font-semibold'>e.</span> Right to data portability
						- the right to request that we move, copy or transfer your Data.{' '}
						<br /> <span className='font-semibold'>f.</span> Right to object -
						the right to object to our use of your Data including where we use
						it for our legitimate interests.{' '}
						<span className='font-bold mr-3'>22.</span> To make enquiries,
						exercise any of your rights set out above, or withdraw your consent
						to the processing of your Data (where consent is our legal basis for
						processing your Data), please contact us via this e-mail address:{' '}
						<a href='mailto:anyworksng@gmail.com' className='text-primary'>
							anyworksng@gmail.com.
						</a>{' '}
						<br />
						23. If you are not satisfied with the way a complaint you make in
						relation to your Data is handled by us, you may be able to refer
						your complaint to the relevant data protection authority. For the
						NIGERIA, UK, this is the Information Commissioner&apos;s Office
						(ICO). The ICO&apos;s contact details can be found on their website
						at{' '}
						<a className='text-primary' href='https://ico.org.uk/'>
							https://ico.org.uk/
						</a>
						. 24. It is important that the Data we hold about you is accurate
						and current. Please keep us informed if your Data changes during the
						period for which we hold it.
					</p>
					<h3 className='text-primary text-2xl text-left'>
						Links to other websites{' '}
					</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>25.</span> This Website may, from
						time to time, provide links to other websites. We have no control
						over such websites and are not responsible for the content of these
						websites. This privacy policy does not extend to your use of such
						websites. You are advised to read the privacy policy or statement of
						other websites prior to using them.
					</p>
					<h3 className='text-primary text-2xl text-left'>
						Changes of business ownership and control
					</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>26.</span> ANYWORKX may, from time
						to time, expand or reduce our business and this may involve the sale
						and/or the transfer of control of all or part of ANYWORKX. Data
						provided by Customers will, where it is relevant to any part of our
						business so transferred, be transferred along with that part and the
						new owner or newly controlling party will, under the terms of this
						privacy policy, be permitted to use the Data for the purposes for
						which it was originally supplied to us. <br />
						<span className='font-bold mr-3'>27.</span> We may also disclose
						Data to a prospective purchaser of our business or any part of it.{' '}
						<br />
						<span className='font-bold mr-3'>28.</span> In the above instances,
						we will take steps with the aim of ensuring your privacy is
						protected.
					</p>
					<h3 className='text-primary text-2xl text-left'>Cookies</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>29.</span> This Website may place
						and access certain Cookies on your computer. ANYWORKX uses Cookies
						to improve your experience of using the Website and to improve our
						range of services. ANYWORKX has carefully chosen these Cookies and
						has taken steps to ensure that your privacy is protected and
						respected at all times. <br />
						<span className='font-bold mr-3'>30.</span>All Cookies used by this
						Website are used in accordance with current NIGERIA, UK and EU
						Cookie Law. <br />
						<span className='font-bold mr-3'>31.</span> Before the Website
						places Cookies on your computer, you will be presented with a
						message bar requesting your consent to set those Cookies. By giving
						your consent to the placing of Cookies, you are enabling ANYWORKX to
						provide a better experience and service to you. You may, if you
						wish, deny consent to the placing of Cookies; however certain
						features of the Website may not function fully or as intended.{' '}
						<br />
						<span className='font-bold mr-3'>32.</span> This Website may place ,{' '}
					</p>
					<Table rows={cookies} headers={cookiesHeader} showHead={true} />
					<p>
						<span className='font-bold mr-3'>33.</span> You can find a list of
						Cookies that we use in the Cookies Schedule. <br />
						<span className='font-bold mr-3'>34.</span> You can choose to enable
						or disable Cookies in your internet browser. By default, most
						internet browsers accept Cookies but this can be changed. For
						further details, please see the help menu in your internet browser.
						You can switch off Cookies at any time, however, you may lose any
						information that enables you to access the Website more quickly and
						efficiently. <br /> <span className='font-bold mr-3'>35.</span> You
						can choose to delete Cookies at any time; however, you may lose any
						information that enables you to access the Website more quickly and
						efficiently including, but not limited to, personalisation settings.{' '}
						<br />
						<span className='font-bold mr-3'>36.</span> It is recommended that
						you ensure that your internet browser is up-to-date and that you
						consult the help and guidance provided by the developer of your
						internet browser if you are unsure about adjusting your privacy
						settings. <br /> <span className='font-bold mr-3'>37.</span> For
						more information generally on cookies, including how to disable
						them, please refer to{' '}
						<a className='text-primary' href='www.aboutcookies'>
							www.aboutcookies.org
						</a>
						. You will also find details on how to delete cookies from your
						computer.
					</p>
					<h3 className='text-primary text-2xl text-left'>General</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>38.</span> You may not transfer any
						of your rights under this privacy policy to any other person. We may
						transfer our rights under this privacy policy where we reasonably
						believe your rights will not be affected. <br />
						<span className='font-bold mr-3'>39.</span> If any court or
						competent authority finds that any provision of this privacy policy
						(or part of any provision) is invalid, illegal or unenforceable,
						that provision or part-provision will, to the extent required, be
						deemed to be deleted, and the validity and enforceability of the
						other provisions of this privacy policy will not be affected. <br />
						<span className='font-bold mr-3'>40.</span>
						Unless otherwise agreed, no delay, act or omission by a party in
						exercising any right or remedy will be deemed a waiver of that, or
						any other, right or remedy. <br />
						<span className='font-bold mr-3'>41.</span> This Agreement will be
						governed by and interpreted according to the law of England and
						Wales. All disputes arising under the Agreement will be subject to
						the exclusive jurisdiction of the English and Welsh courts.
					</p>
					<h3 className='text-primary text-2xl text-left'>
						Changes to this privacy policy
					</h3>
					<p className='mb-[15px] xl:mb-[25px]'>
						{' '}
						<span className='font-bold mr-3'>42.</span> ANYWORKX reserves the
						right to change this privacy policy as we may deem necessary from
						time to time or as may be required by law. Any changes will be
						immediately posted on the Website and you are deemed to have
						accepted the terms of the privacy policy on your first use of the
						Website following the alterations.
					</p>
					<h4>
						You may contact ANYWORKX by email at{' '}
						<a className='text-primary' href='mailto:anyworksng@gmail.com'>
							{' '}
							anyworksng@gmail.com
						</a>
						.
					</h4>
					<h4 className='mt-4'>
						This privacy policy was created on{' '}
						<span className='font-bold'>01 October 2022</span>.
					</h4>
				</div>
			</div>
		</div>
	);
};

export default Privacypolicy;
