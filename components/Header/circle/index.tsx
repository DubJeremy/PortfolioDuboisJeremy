import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import styles from './circle.module.scss';
import Image from 'next/image';

const Circle = () => {
	useEffect(() => {
		const circle = document.getElementById('circle');
		const tiltStrength = 40; // Force de l'inclinaison (ajustez selon vos besoins)

		const handleMouseMove = (e: { clientX: number; clientY: number }) => {
			const xPos = (e.clientX / window.innerWidth - 0.5) * tiltStrength;
			const yPos = (e.clientY / window.innerHeight - 0.5) * tiltStrength;

			gsap.to(circle, {
				rotationX: yPos,
				rotationY: -xPos,
				ease: 'power2.out',
			});
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div className={styles.circle}>
			<div className={styles.background} />
			<div id='circle' className={styles.img}>
				<Image src={'/img/ice.png'} alt='circle ice' fill />
			</div>
		</div>
	);
};

export default Circle;

// import React, { useEffect, useRef, useState } from 'react';
// import { useTexture } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import { Mesh, BufferGeometry, Material, Vector2 } from 'three';

// import useMediaQuery from '@/tools/useMediaQuery';

// const Circle = () => {
// 	const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
// 		useTexture([
// 			// '/img/texture/ice/Blue_Ice_Color.jpg',
// 			// '/img/texture/ice/Blue_Ice_DISP.png',
// 			// '/img/texture/ice/Blue_Ice_NORM.jpg',
// 			// '/img/texture/ice/Blue_Ice_ROUGH.jpg',
// 			// '/img/texture/ice/Blue_Ice_OCC.jpg',
// 			// -------------------------------
// 			// '/img/texture/snow/snowColor.jpg',
// 			// '/img/texture/snow/snowDISP.png',
// 			// '/img/texture/snow/snowNORM.jpg',
// 			// '/img/texture/snow/snowROUGH.jpg',
// 			// '/img/texture/snow/SnowOCC.jpg',
// 			// ----------------------------
// 			'/img/texture/water/WaterColor.jpg',
// 			'/img/texture/water/WaterDISP.png',
// 			'/img/texture/water/WaterNORM.jpg',
// 			'/img/texture/water/WaterROUGH.jpg',
// 			'/img/texture/water/WaterOCC.jpg',
// 		]);

// 	const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
// 	const mouse = useRef<Vector2>(new Vector2(0, 0));
// 	const [targetReached] = useMediaQuery(`(min-width: 400px)`);

// 	useEffect(() => {
// 		const handleMouseMove = (event: MouseEvent) => {
// 			const { clientX, clientY } = event;
// 			const x = (clientX / window.innerWidth) * 2 - 1;
// 			const y = -(clientY / window.innerHeight) * 2 + 1;
// 			mouse.current.set(x, y);
// 		};
// 		window.addEventListener('mousemove', handleMouseMove);

// 		return () => {
// 			window.removeEventListener('mousemove', handleMouseMove);
// 		};
// 	}, []);

// 	useFrame(() => {
// 		if (meshRef.current) {
// 			const { current: mesh } = meshRef;

// 			if (targetReached) {
// 				mesh.rotation.y = mouse.current.x * 0.5;
// 				mesh.rotation.x = mouse.current.y * 0.5;
// 			} else {
// 				mesh.rotation.y += 0.005;
// 			}
// 		}
// 	});

// 	return (
// 		<>
// 			<ambientLight intensity={0.5} />
// 			<directionalLight position={[-4, 8, 8]} />
// 			<mesh ref={meshRef}>
// 				<sphereGeometry args={[2.2, 32, 32]} />
// 				<meshStandardMaterial
// 					map={colorMap}
// 					displacementMap={displacementMap}
// 					normalMap={normalMap}
// 					roughnessMap={roughnessMap}
// 					aoMap={aoMap}
// 				/>
// 			</mesh>
// 		</>
// 	);
// };

// export default Circle;
