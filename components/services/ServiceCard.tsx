import Image from 'next/image';
interface Props {
	service: {
		title: string;
		details: string;
		image?: any;
	};
}
const ServiceCard = ({ service }: Props) => {
	return (
		<div>
			{/* <Image src={service.image} alt="service" height={200} width={150} /> */}
			<div
				className='bg-no-repeat bg-cover bg-center h-[200px] relative'
				style={{ backgroundImage: `url(${service.image})` }}
			>
				<p className='title text-center text-base absolute bottom-0 w-full text-white serviceTag py-[15px]'>
					{service.title}
				</p>
			</div>
			<p className='details text-font-02 text-sm mt-[15px]'>
				{service.details}
			</p>
		</div>
	);
};

export default ServiceCard;
