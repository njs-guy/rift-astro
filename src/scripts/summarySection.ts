export interface SubSection {
	title: string;
	link: string;
}

export interface Section {
	title: string;
	subsections: SubSection[];
}
