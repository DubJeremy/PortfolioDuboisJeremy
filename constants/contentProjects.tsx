export const contentProjects: ProjectTypes.Content[] = [
	{
		id: 1,
		done: true,
		title: 'KBDev Website',
		desc: 'KBDEV',
		link: 'https://kbdev.io',
		techs: [
			'next',
			'react',
			'typescript',
			'sass',
			'nodeMailer',
			'affinityDesigner',
			'framerMotion',
		],
		screens: [
			'kbdevHome',
			'kbdevHomeMobile',
			'kbdevAulia',
			'kbdevAuliaMobile',
			'kbdevDigitalSupport',
		],
		mobileApp: false,
	},
	{
		id: 2,
		done: true,
		title: 'Petshine',
		desc: 'PETSHINE',
		link: 'https://www.petshine.dubj.fr',
		techs: ['next', 'react', 'typescript', 'sass', 'figma'],
		screens: [
			'petshineHome',
			'petshineHomeMobile',
			'petshineFav',
			'petshineCarousel',
			'petshineWelness',
		],
		mobileApp: false,
	},
	{
		id: 3,
		done: false,
		title: 'TCG-Collect',
		desc: 'TCG',
		techs: [
			'docker',
			'typeOrm',
			'postgreSql',
			'express',
			'reactNative',
			'typescript',
			'sass',
			'figma',
		],
		screens: [
			'tcgBackCard',
			'tcgCards',
			'tcgFilters',
			'tcgProfil',
			'tcgSeries',
		],
		mobileApp: true,
	},
];
