import { swatch, fileIcon, logoShirt, stylishShirt } from '../assets';

export const EditorTabs = [
	{
		name: 'colorpicker',
		icon: swatch,
	},
	{
		name: 'filepicker',
		icon: fileIcon,
	},
];

export const FilterTabs = [
	{
		name: 'logoShirt',
		icon: logoShirt,
	},
	{
		name: 'stylishShirt',
		icon: stylishShirt,
	},
];

export const DecalTypes = {
	logo: {
		stateProperty: 'logoDecal',
		filterTab: 'logoShirt',
	},
	full: {
		stateProperty: 'fullDecal',
		filterTab: 'stylishShirt',
	},
};

// config/constants.js
export const MatrialType = [
	{
		id: 1,
		type: '/shirt_baked.glb',
		materialName: 'lambert1',
		nodeName: 'T_Shirt_male',
		fullTexture: {
			position: [0, 0, 0],
			rotation: [0, 0, 0],
			scale: 0.5,
		},
		logoTexture: {
			position: [0, 0.04, 0.15],
			rotation: [0, 0, 0],
			scale: 0.1,
		},
	},
	{
		id: 2,
		type: '/baseball_cap.glb',
		materialName: 'Scene_-_Root',
		nodeName: 'gorra002__0',
		fullTexture: {
			position: [0, 0, 0],
			rotation: [0, 0, 0],
			scale: 0.5,
		},
		logoTexture: {
			position: [0, 0.04, 0.15],
			rotation: [0, 0, 0],
			scale: 0.1,
		},
	},
	{
		id: 3,
		type: '/plain_mug.glb',
		materialName: 'Material.001',
		nodeName: 'Object_2',
		fullTexture: {
			position: [0, 0, 0],
			rotation: [0, 0, 0],
			scale: 0.5,
		},
		logoTexture: {
			position: [0, 0.04, 0.15],
			rotation: [0, 0, 0],
			scale: 0.1,
		},
	},
];
