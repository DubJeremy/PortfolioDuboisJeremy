import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh, DoubleSide, BufferGeometry, Color } from 'three';

import styles from './profilPicture.module.scss';

const ProfilPicture = () => {
	const texture = useLoader(TextureLoader, '/img/chat.png');
	const flagRef = useRef<Mesh>();

	useFrame((state, delta) => {
		const flag = flagRef.current;
		if (flag) {
			const time = state.clock.getElapsedTime();
			const geometry = flag.geometry as BufferGeometry;
			const vertices = geometry.getAttribute('position');
			const positions = vertices.array as number[];

			for (let i = 0; i < positions.length; i += 3) {
				const x = (i / 3) % (30 + 1);
				const y = Math.floor(i / 3 / (30 + 1));
				positions[i + 2] =
					Math.sin(x / 8 + time * 1.2) * Math.cos(y / 10) * 0.3;
			}

			vertices.needsUpdate = true;
		}
	});

	return (
		<mesh ref={flagRef} className={styles.profilPicture}>
			<planeGeometry args={[8, 6, 30, 20]} />
			<meshBasicMaterial map={texture} side={DoubleSide} />
		</mesh>
	);
};

export default ProfilPicture;
