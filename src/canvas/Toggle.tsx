import state from '../store';

const Toggle = () => {
	return (
		<div className='flex flex-col gap-5 justify-center items-center'>
			<button
				onClick={() => (state.currentId = 3)}
				className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>
				Show Mug
			</button>
			<button
				onClick={() => (state.currentId = 2)}
				className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition'>
				Show Cap
			</button>
			<button
				onClick={() => (state.currentId = 1)}
				className='px-4 py-2 mx-0 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition'>
				Show T-Shirt
			</button>
		</div>
	);
};

export default Toggle;
