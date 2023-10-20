import { defineConfig } from "../../rift-config";

export interface RiftConfig {
	siteTitle?: string;
	homeHeading?: string;
	description?: string;
	tagline?: string;
	buttons?: homeButton[];
	logo?: string;
	navbar?: RiftNavBarItem[];
	blog?: RiftBlog;
	docs?: RiftDocs;
}

export interface homeButton {
	label: string;
	link?: string;
	primary?: false;
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

export function getRiftConfig() {
	return defineConfig;
}
