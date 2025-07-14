import React from 'react';

interface Project {
	title: string;
	description: string;
	image: string;
	link?: string;
}

const projects: Project[] = [
	{
		title: 'E-Commerce App',
		description:
			'A full-stack e-commerce web app with React, Node.js, and MongoDB.',
		image: './threejs.png',
		link: 'https://yourapp.com/ecommerce',
	},
	{
		title: 'Portfolio Website',
		description: 'A personal portfolio built using React and Tailwind CSS.',
		image: './threejs.png',
		link: 'https://yourapp.com/portfolio',
	},
	{
		title: 'Chat Application',
		description: 'A real-time chat app using Socket.io and React.',
		image: './threejs.png',
		link: 'https://yourapp.com/chat',
	},
];

const Projects = () => {
	return (
		<section className='px-6 py-12 max-w-6xl mx-auto'>
			<h1 className='text-3xl font-bold mb-8 text-center'>Our Projects</h1>
			<div className='grid md:grid-cols-3 gap-8'>
				{projects.map((project, index) => (
					<div
						key={index}
						className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow'>
						<img
							src={project.image}
							alt={project.title}
							className='w-full h-48 object-cover rounded-t-lg'
						/>
						<div className='p-4'>
							<h2 className='text-xl font-semibold mb-2'>{project.title}</h2>
							<p className='text-gray-600'>{project.description}</p>
							{project.link && (
								<a
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block mt-4 text-blue-500 hover:underline'>
									View Project →
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
