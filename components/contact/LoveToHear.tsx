import Image from 'next/image';

interface Contact {
    title: string;
    content: string;
    info: string;
    image: any
}
const contacts: Contact[] = [
    {
        image: '/images/contact/email.svg',
        title: 'Email',
        content:
            'Our friendly team is here to help.',
        info: 'hissasd@asdsd.com'
    },
    {
        image: '/images/contact/location.svg',
        title: 'Office',
        content:
            'Come say hello at our office HQ.',
        info: '100 Smith Street Collingwood VIC 3066 AU'
    },
    {
        image: '/images/contact/phone.svg',
        title: 'Phone',
        content:
            'Mon-Fri from 8am to 5pm.',
        info: '+1 (555) 000-0000'
    },

];

const LoveToHear = () => {
    return (
        <div className='container text-center'>
            <h2 className='text-xl text-primary font-bold '>
                Contact us
            </h2>
            <h2 className='text-xl text-font-01 font-bold my-[10px]'>
                We’d love to hear from you
            </h2>
            <p className="text-base text-font-02">
                Our friendly team is always here to chat.
            </p>
            <div className='grid  gap-[62px] mt-[60px] grid-cols-3 mlg:grid-cols-1' >
                {contacts.map((contact, index) => (
                    <div key={index} className='flex flex-col'>
                        <div className='mr-[5px]'>
                            <Image
                                src={contact.image}
                                alt='menu icon'
                                width={48}
                                height={48}
                                objectFit='contain'
                            />
                        </div>
                        <div className='details'>
                            <h6 className='text-font-01 font-semibold text-base mt-3'>{contact.title}</h6>
                            <p className='text-font-02 text-sm mb-[10px] mt-[5px]'>
                                {contact.content}
                            </p>
                            <p className='font-semibold text-primary text-sm '>
                                {contact.info}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default LoveToHear;
