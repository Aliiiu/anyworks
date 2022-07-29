import Image from 'next/image'
interface Props {
  service: {
    title: string
    image?: any
  }
}
const ServiceCard = ({ service }: Props) => {
  return (
    <div>
      {/* <Image src={service.image} alt="service" height={200} width={150} /> */}
      <div
        className="bg-no-repeat bg-cover bg-center h-[200px] relative"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <p className="title text-center text-sm absolute bottom-0 w-full text-white serviceTag py-[15px]">
          {service.title}
        </p>
      </div>
      <p className="details text-font-02 text-xs mt-[15px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at donec mi diam leo aliquam
        non sagittis mi diam leo aliquam non sagittis.
      </p>
    </div>
  )
}

export default ServiceCard
