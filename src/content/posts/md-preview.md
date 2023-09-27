---
slug: md-preview
title: Markdown preview
excerpt: See how Markdown looks in Rift
date: 2023-09-12
lastUpdated: 2023-09-25
author: John Astro
---

## Table of Contents

# Basic Syntax

Derived from [Markdown Guide](https://www.markdownguide.org/cheat-sheet/).

To add a table of contents, add an H2 like so:

```md
## Table of Contents
```

For more information, see [remark-toc](https://github.com/remarkjs/remark-toc).

_These_ are the elements outlined in **John Gruber’s** original design document.
All **_Markdown_** applications support these elements.

## Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Paragraph text.

## Bold

**Bold and brash**

## Italic

_More like belongs in the trash_

## Blockquote

> "Let's show 'em a thing or three!"

## Ordered List

1. Create a free and open source Astro theme
2. Have everyone be impressed by your free software
3. ???
4. Profit

## Unordered List

-   Pet cats
-   Pet dogs
-   Pet goldfish

## Code

`let x = 8`

## Horizontal Rule

---

## Link

[Donate to Doctor's Without Borders](https://www.doctorswithoutborders.org/)

## Image

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/320px-Cat_August_2010-4.jpg)

# Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown
applications support these elements.

## Table

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

## Fenced Code Block

```ts
// src/scripts/changeTheme.ts

// Changes the theme
export function changeTheme(theme: string) {
	const html = document.documentElement;
	html.removeAttribute("data-theme"); // remove previous theme

	if (theme === "auto" || theme === "light" || theme === "dark") {
		html.setAttribute("data-theme", theme);
		saveTheme(theme);
	} else {
		// Don't save obviously wrong data
		return;
	}
}

// Saves the theme through its name.
export function saveTheme(theme: string) {
	localStorage.setItem("preferredTheme", theme);
}

// Loads the preferred theme on page load.
export function loadTheme() {
	const theme = localStorage.getItem("preferredTheme");

	// Set the theme
	changeTheme(theme);
}
```

Astro uses Shiki under the hood for syntax highlighting.
See [Shiki's themes](https://github.com/shikijs/shiki/tree/main/packages/shiki/themes) for a list of default themes.
More info can be found in the [Astro Docs](https://docs.astro.build/en/guides/markdown-content/#shiki-configuration).

## Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

## Heading ID

## My Great Heading {#custom-id}

## Definition List

term
: definition

## Strikethrough

~~The world is flat.~~

## Task List

-   [x] Take a shower
-   [ ] Learn something new
-   [ ] Actually finish something for once

## Emoji

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

## Highlight

I need to highlight these ==very important words==.

## Subscript

H~2~O

## Superscript

X^2^
