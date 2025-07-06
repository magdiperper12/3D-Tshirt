// components/Shirt.js
import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';
import { MatrialType } from '../config/constants';

const Shirt = () => {
	const snap = useSnapshot(state);

	// Get current object info based on currentId
	const currentItem = MatrialType.find((item) => item.id === snap.currentId);

	// Load textures
	const logoTexture = useTexture(snap.logoDecal);
	const fullTexture = useTexture(snap.fullDecal);

	// Load GLTF model dynamically
	const { nodes, materials } = useGLTF(currentItem.type);

	useFrame((state, delta) =>
		easing.dampC(
			materials[currentItem.materialName].color,
			snap.color,
			0.25,
			delta
		)
	);

	const stateString = JSON.stringify(snap);

	return (
		<group key={stateString}>
			<mesh
				castShadow
				geometry={nodes[currentItem.nodeName].geometry}
				material={materials[currentItem.materialName]}
				material-roughness={1}
				dispose={null}>
				{snap.isFullTexture && (
					<Decal
						position={currentItem.fullTexture.position}
						rotation={currentItem.fullTexture.rotation}
						scale={currentItem.fullTexture.scale}
						map={fullTexture}
					/>
				)}

				{snap.isLogoTexture && (
					<Decal
						position={currentItem.logoTexture.position}
						rotation={currentItem.logoTexture.rotation}
						scale={currentItem.logoTexture.scale}
						map={logoTexture}
						map-anisotropy={16}
						depthTest={false}
						depthWrite={true}
					/>
				)}
			</mesh>
		</group>
	);
};

export default Shirt;
