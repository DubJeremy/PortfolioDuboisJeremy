declare namespace ProjectTypes {
	interface Content {
		id: number;
		done: boolean;
		title: string;
		desc: string;
		link?: string;
		techs: string[];
		screens: string[];
		mobileApp: boolean;
	}
}
