export interface RiftConfig {
	title: string;
	description: string;
	logo: string;
	navbar: RiftNavBarItem[];
	blog: RiftBlog;
	docs: RiftDocs;
}

export interface RiftNavBarItem {
	text: string;
	link: string;
}

export interface RiftDocs {
	basePath: string;
	hide: boolean;
	editLink: string;
	lastUpdated: boolean;
	hideDrafts: true;
	sidebar: DocSideBarSection[];
}

export interface DocSideBarSection {
	text: string;
	items: DocSideBarItem[];
}

export interface DocSideBarItem {
	text: string;
	link: string;
}

export interface RiftBlog {
	basePath: string;
	hide: boolean;
	tableOfContents: boolean;
	hideDrafts: boolean;
}
