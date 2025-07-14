import React from 'react';

const About = () => {
	return (
		<section className='px-6 py-12 max-w-4xl mx-auto'>
			<h1 className='text-3xl font-bold mb-6 text-center'>About Us</h1>

			<p className='text-lg leading-7 text-gray-700'>
				Welcome to our 3D T-Shirt customization platform! We empower you to
				design and visualize your own t-shirt in real-time using cutting-edge 3D
				technology. Whether you're a brand, artist, or just someone with style,
				we've built the tools to bring your creativity to life—on fabric.
			</p>

			<div className='mt-8 space-y-6'>
				<div>
					<h2 className='text-xl font-semibold mb-1'>Our Mission</h2>
					<p className='text-gray-700'>
						To revolutionize the way people design and buy apparel by combining
						technology, art, and fashion into an interactive 3D experience.
					</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold mb-1'>What Makes Us Unique</h2>
					<ul className='list-disc list-inside text-gray-700 space-y-1'>
						<li>Live 3D preview of your customized t-shirt</li>
						<li>Upload your own designs, logos, and text</li>
						<li>High-quality printing and premium fabric</li>
						<li>Fast worldwide shipping</li>
					</ul>
				</div>

				<div>
					<h2 className='text-xl font-semibold mb-1'>Our Team</h2>
					<p className='text-gray-700'>
						We are a group of developers, designers, and fashion enthusiasts who
						believe creativity should have no limits. Our passion for both
						technology and style fuels everything we build.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
