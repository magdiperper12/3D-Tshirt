import React from 'react';
import { FaCode, FaMobileAlt, FaChartLine, FaBullhorn } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Service {
	title: string;
	description: string;
	icon: IconType;
	color: string;
}

const services: Service[] = [
	{
		title: '3D T-Shirt Customization',
		description:
			'Create your unique t-shirt design with our real-time 3D preview tool that lets you customize colors, texts, and graphics easily.',
		icon: FaCode,
		color: 'text-blue-600',
	},
	{
		title: 'Mobile Friendly Design',
		description:
			'Design and order your 3D t-shirts anytime, anywhere with our fully responsive mobile app and website.',
		icon: FaMobileAlt,
		color: 'text-green-600',
	},
	{
		title: 'High Quality Printing',
		description:
			'We use advanced printing technology to ensure vibrant colors and durable prints on premium fabric materials.',
		icon: FaChartLine,
		color: 'text-purple-600',
	},
	{
		title: 'Fast Worldwide Shipping',
		description:
			'Get your custom 3D t-shirts delivered quickly wherever you are with reliable global shipping options.',
		icon: FaBullhorn,
		color: 'text-red-600',
	},
];

const Services = () => {
	return (
		<section className='px-6 py-12 max-w-6xl mx-auto'>
			<h1 className='text-3xl font-bold text-center mb-10'>Our Services</h1>
			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
				{services.map((service, index) => {
					const Icon = service.icon;
					return (
						<div
							key={index}
							className='bg-white rounded-lg shadow hover:shadow-lg transition p-6 text-center border border-gray-100'>
							<div className={`mb-4 flex justify-center ${service.color}`}>
								<Icon className='text-3xl' />
							</div>
							<h2 className='text-xl font-semibold mb-2'>{service.title}</h2>
							<p className='text-gray-600 text-sm'>{service.description}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
