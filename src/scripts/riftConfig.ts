import { defineConfig } from "../../rift-config";

// Config

export interface RiftConfig {
	siteTitle?: string;
	home?: RiftHome;
	navbar?: RiftNavBarItem[];
	logo?: string;
	blog?: RiftBlog;
	docs?: RiftDocs;
}

export interface RiftHome {
	heading?: string;
	description?: string;
	tagline?: string;
	buttons?: HomeButton[];
	features?: HomeFeature[];
	homePosts?: HomePosts;
}

export interface HomeButton {
	label: string;
	link?: string;
	primary?: boolean;
	targetBlank?: boolean;
}

export interface HomeFeature {
	title: string;
	description: string;
}

export interface HomePosts {
	mostRecent?: boolean;
	postLinks: string[];
}

export interface RiftNavBarItem {
	text: string;
	link: string;
}

export interface RiftDocs {
	basePath?: string;
	hide?: boolean;
	editLink?: string;
	lastUpdated?: boolean;
	hideDrafts?: boolean;
	sidebar?: DocSideBarSection[];
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
	basePath?: string;
	hide?: boolean;
	showTableOfContents?: boolean;
	hideDrafts?: boolean;
}

// Functions

export function getRiftConfig() {
	return defineConfig;
}
