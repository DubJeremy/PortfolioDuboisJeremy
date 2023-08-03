import React, { useEffect, useMemo, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import {
	TextureLoader,
	Mesh,
	DoubleSide,
	BufferGeometry,
	BufferAttribute,
	Color,
} from 'three';

const Picture = () => {
	const texture = useLoader(TextureLoader, '/img/safari/kazukiNoda.png');
	const flagRef = useRef<Mesh>(null);

	const geometry = useMemo(() => {
		const geom = new BufferGeometry();
		const width = 4;
		const height = 5;
		const widthSegments = 30;
		const heightSegments = 20;
		const positions = [];
		const uv = [];
		const indices = [];

		for (let y = 0; y <= heightSegments; y++) {
			for (let x = 0; x <= widthSegments; x++) {
				const u = x / widthSegments;
				const v = y / heightSegments;
				const xpos = u * width - width / 2;
				const ypos = v * height - height / 2;
				const zpos = 0;

				positions.push(xpos, ypos, zpos);
				uv.push(u, v);

				if (x < widthSegments && y < heightSegments) {
					const a = x + y * (widthSegments + 1);
					const b = x + (y + 1) * (widthSegments + 1);
					const c = x + 1 + (y + 1) * (widthSegments + 1);
					const d = x + 1 + y * (widthSegments + 1);

					indices.push(a, b, d);
					indices.push(b, c, d);
				}
			}
		}

		geom.setAttribute(
			'position',
			new BufferAttribute(new Float32Array(positions), 3)
		);
		geom.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2));
		geom.setIndex(indices);

		return geom;
	}, []);

	useFrame((state, delta) => {
		const flag = flagRef.current;
		if (flag) {
			const time = state.clock.getElapsedTime();
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
		<mesh ref={flagRef} geometry={geometry}>
			<meshBasicMaterial map={texture} side={DoubleSide} />
		</mesh>
	);
};

export default Picture;
