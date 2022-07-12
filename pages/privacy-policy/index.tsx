import Image from 'next/image';

const Privacypolicy = () => {
	return (
		<div className='container relative'>
			<div className='absolute hidden lg:block left-0 top-[100px]'>
				<Image
					src='/images/circle.png'
					alt='circle point'
					width={'110px'}
					height={'193px'}
				/>
			</div>
			<div className='absolute hidden lg:block right-0 bottom-0'>
				<Image
					src='/images/circle2.png'
					alt='circle point'
					width={'110px'}
					height={'193px'}
				/>
			</div>
			<div className='mt-[130px] xl:mt-[150px] mb-[65px] px-[33px] lg:px-[234px]'>
				<h2 className='lg:mb-[48px] mb-[20px] text-center text-primary'>
					Privacy Policy
				</h2>
				<p className='mb-[15px] xl:mb-[25px]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. A purus ac,
					turpis quis eget. Convallis at praesent bibendum sit diam consequat
					pellentesque. Mauris, elementum neque ut pretium massa vitae enim.
					Nisl faucibus tempor, semper mi eget ut ornare. Turpis aliquam tellus
					id tristique lectus scelerisque scelerisque eu, platea. Faucibus enim
					aliquet venenatis varius dictumst. Scelerisque orci et sed sed nunc.
					Ac gravida ut porttitor varius scelerisque volutpat, eget. Et justo
					non id libero libero eget interdum. Viverra tincidunt tincidunt
					integer mi sed. A tortor mi aliquet urna. <br />
				</p>
				<p className='mb-[15px] xl:mb-[25px]'>
					{' '}
					Nec enim quis arcu accumsan elit ut erat netus at. Congue id elit
					congue risus nisi amet malesuada. Amet ornare lectus pellentesque
					porta mauris, tortor, dignissim tincidunt phasellus. Consectetur proin
					luctus amet, erat sed tempor, sed nunc. Elit cursus viverra nam ac,
					bibendum tempor. Volutpat non nisi, rhoncus lectus. Leo, vitae duis
					nisl vestibulum nisl ut mi, consectetur tempor. Ac cras imperdiet
					porta rhoncus velit. Dignissim risus at varius et condimentum placerat
					volutpat sem. Aliquam, suspendisse habitasse faucibus in convallis.
					Laoreet lectus hendrerit a in sit. <br />
				</p>
				<p>
					Tellus pharetra, et feugiat vitae lectus. At bibendum sem sit justo,
					bibendum sagittis, lorem. At metus quam ut elementum semper sit. Amet
					fermentum, egestas non est ac. Diam ullamcorper duis laoreet sit.
					Molestie laoreet ullamcorper nunc rhoncus sit semper tristique enim.
					Euismod lectus at lorem viverra. Id arcu bibendum massa blandit. Urna
					cursus lobortis ante viverra quis adipiscing tristique netus felis.
					Sit tortor, neque, eget molestie tellus. Pulvinar euismod nulla
					laoreet vulputate tellus mi. Quis eleifend aliquam velit consequat
					tellus luctus diam ac. Ipsum, tincidunt congue euismod massa risus
					bibendum tempor eget.
				</p>
			</div>
		</div>
	);
};

export default Privacypolicy;
