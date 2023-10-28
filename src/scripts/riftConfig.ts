import { defineConfig } from "../../rift-config";

// Config

/**
 * Configuration options for the Rift site.
 */
export interface RiftConfig {
	/**
	 * What the tab title should say.
	 */
	siteTitle?: string;
	/**
	 * Link to the site logo.
	 */
	logo?: string;
	/**
	 * NavBar options
	 */
	navbar?: RiftNavBar;
	/**
	 * Homepage options
	 */
	home?: RiftHome;
	/**
	 * Blog options
	 */
	blog?: RiftBlog[];
	/**
	 * Documentation options
	 */
	docs?: RiftDocs[];
	/**
	 * Footer options.
	 */
	footer?: RiftFooter;
}

/**
 * Configuration options for the Rift homepage.
 */
export interface RiftHome {
	/**
	 * Text for the main heading. Typically the site name.
	 */
	heading?: string;
	/**
	 * Text for the subheading.
	 */
	description?: string;
	/**
	 * Dim text below the description subheading.
	 */
	tagline?: string;
	/**
	 * Buttons below the tagline that act like links.
	 */
	buttons?: HomeButton[];
	/**
	 * Feature cards below the buttons.
	 */
	features?: HomeFeature[];
	/**
	 * What posts to display on the homepage, if any.
	 */
	homePosts?: HomePosts;
}

/**
 * Buttons below the tagline that act like links.
 */
export interface HomeButton {
	/**
	 * The text on the button.
	 */
	label: string;
	/**
	 * Where the button click takes the user.
	 */
	link?: string;
	/**
	 * If true, this button uses the primary theme color.
	 * @default false
	 */
	primary?: boolean;
	/**
	 * If true, this button opens the link in a new tab.
	 * @default false
	 */
	targetBlank?: boolean;
}

/**
 * The feature cards on the homepage.
 */
export interface HomeFeature {
	/**
	 * The card title.
	 */
	title: string;
	/**
	 * The body text for the card.
	 */
	description: string;
}

/**
 * A post on the homepage.
 */
export interface HomePosts {
	mostRecent?: boolean;
	postLinks: string[];
}

/**
 * The site's navbar.
 */
export interface RiftNavBar {
	/**
	 * The text label for the site's name on the left side of the navbar.
	 */
	siteName?: string;
	/**
	 * If true, hides the theme switcher from the navbar.
	 * @default false
	 */
	hideThemeSwitcher?: boolean;
	/**
	 * The links to display on the right side of the navbar.
	 */
	items?: (RiftNavBarItem | RiftNavBarItemGroup)[];
}

/**
 * A link for the navbar.
 */
export interface RiftNavBarItem {
	/**
	 * The text label.
	 */
	text: string;
	/**
	 * The url.
	 */
	link: string;
}

/**
 * A group of links for the navbar.
 */
export interface RiftNavBarItemGroup {
	/**
	 * The text label.
	 */
	text: string;
	/**
	 * The links this group contains.
	 */
	children: RiftNavBarItem[];
}

export interface RiftBlog {
	basePath?: string;
	hide?: boolean;
	showTableOfContents?: boolean;
	hideDrafts?: boolean;
}

/**
 * Options for documentation.
 */
export interface RiftDocs {
	/**
	 * Where the docs are stored in the project files.
	 * @example "/docs"
	 */
	basePath?: string;
	/**
	 * Whether or not to hide the documentation section. Useful if you don't need one.
	 * @default false
	 */
	hide?: boolean;
	// TODO: editLink interface
	editLink?: string;
	/**
	 * Label for the "Edit this page" button.
	 */
	editLinkLabel?: string;
	/**
	 * If false, hide the last updated timestamp.
	 * @default true
	 */
	lastUpdated?: boolean;
	/**
	 * If true, hide doc pages labeled as drafts.
	 * @default false
	 */
	hideDrafts?: boolean;
	/**
	 * Pages to include in the sidebar.
	 */
	sidebar?: DocSideBarSection[];
}

/**
 * A group of doc sidebar items.
 */
export interface DocSideBarSection {
	/**
	 * The label for the doc section.
	 */
	title: string;
	/**
	 * The pages for this section.
	 */
	subsections: DocSideBarItem[];
}

/**
 * A link in the sidebar.
 */
export interface DocSideBarItem {
	/**
	 * The label for the page.
	 */
	text: string;
	/**
	 * The link to the page.
	 */
	link: string;
}

export interface RiftFooter {
	copyrightName?: string;
	yearOverride?: string;
	items: FooterItem[];
}

export interface FooterItem {
	text?: string;
	icon?: string;
	link?: string;
	sitemap?: boolean;
}

// Functions

/**
 * Returns the current Rift configuration.
 *
 * @returns RiftConfig
 */
export function getRiftConfig() {
	return defineConfig;
}

/**
 * Creates and returns an array of sidebar sections the doc pages.
 *
 * @returns DocSideBarSection[]
 */
export function getDocSidebar() {
	const config = getRiftConfig();
	const sidebar: DocSideBarSection[] = [];

	// BUG: Site crashes if there is no doc config

	const sections = config.docs[0].sidebar;
	for (let i = 0; i < sections.length; i++) {
		sidebar.push(sections[i]);
	}

	return sidebar;
}

/**
 * Creates and returns an array of sidebar items for the doc pages.
 *
 * @returns DocSideBarItem[]
 */
export function getDocSidebarSubsections() {
	const sidebar = getDocSidebar();
	const subsections: DocSideBarItem[] = [];

	for (let i = 0; i < sidebar.length; i++) {
		for (let j = 0; j < sidebar[i].subsections.length; j++) {
			subsections.push(sidebar[i].subsections[j]);
		}
	}

	return subsections;
}
