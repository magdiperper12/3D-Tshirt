import { proxy } from 'valtio';

const state = proxy({
	intro: true,
	currentId: 1,
	color: '#EFBD48',
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: './threejs.png',
	fullDecal: './react.png',
});

export default state;
