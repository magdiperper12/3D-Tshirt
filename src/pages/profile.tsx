import React from 'react';

interface UserProfileProps {
	name: string;
	email: string;
	avatarUrl: string;
	bio?: string;
	location?: string;
	website?: string;
}
const user: UserProfileProps = {
	name: 'Magdi Saleh',
	email: 'magdi@example.com',
	avatarUrl: 'https://i.pravatar.cc/150?img=12', // رابط صورة عشوائية
	bio: 'I am a passionate developer specializing in 3D web applications and modern frontend technologies.',
	location: 'Cairo, Egypt',
	website: 'https://magdisaleh.dev',
};
const UserProfile: React.FC<UserProfileProps> = ({}) => {
	return (
		<section className='max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10'>
			<div className='flex items-center space-x-6'>
				<img
					className='w-24 h-24 rounded-full object-cover border-2 border-blue-500'
					src={user.avatarUrl}
					alt={`${name} avatar`}
				/>
				<div>
					<h1 className='text-2xl font-bold'>{user.name}</h1>
					<p className='text-gray-600'>{user.email}</p>
					{location && <p className='text-gray-500 mt-1'>📍 {user.location}</p>}
					{user.website && (
						<p className='mt-1'>
							🌐{' '}
							<a
								href={user.website}
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600 hover:underline'>
								{user.website}
							</a>
						</p>
					)}
				</div>
			</div>

			{user.bio && (
				<div className='mt-6'>
					<h2 className='text-xl font-semibold mb-2'>About Me</h2>
					<p className='text-gray-700 leading-relaxed'>{user.bio}</p>
				</div>
			)}
		</section>
	);
};

export default UserProfile;
