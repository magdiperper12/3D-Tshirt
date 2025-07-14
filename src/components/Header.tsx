import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { slideAnimation } from '../config/motion';
import { FaListUl } from 'react-icons/fa';
import { useState } from 'react';

function Header() {
	const [click, setclick] = useState(false);
	const handellClick = () => {
		setclick(!click);
	};
	return (
		<nav className='p-4  gap-4 bg-gray-200 flex justify-between items-center'>
			<div>
				<motion.header {...slideAnimation('down')}>
					<img
						src='./threejs.png'
						alt='logo'
						className='w-12 h-12 object-contain lg:ms-12'
					/>
				</motion.header>
			</div>

			<div className='hidden lg:flex justify-center items-center gap-5 text-lg font-bold text-gray-900/70'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/services'>Services</Link>
				<Link to='/projects'>Projects</Link>
				<Link to='/profile'>
					<img
						src='https://i.pravatar.cc/150?img=12'
						alt='user'
						className='w-12 h-12 rounded-full'
					/>
				</Link>
			</div>
			<div className='flex lg:hidden'>
				<button
					className='flex lg:hidden text-3xl text-gray-800/70'
					onClick={handellClick}>
					<FaListUl />
				</button>
				{click && (
					<div className='flex justify-center flex-col h-screen w-full z-30 items-start gap-5 text-lg font-bold text-gray-900/70'>
						<Link to='/'>Home</Link>
						<Link to='/about'>About</Link>
						<Link to='/services'>Services</Link>
						<Link to='/projects'>Projects</Link>
						<Link to='/profile'>
							<img
								src='https://i.pravatar.cc/150?img=12'
								alt='user'
								className='w-12 h-12 rounded-full'
							/>
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
}
export default Header;
