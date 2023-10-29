// Gets the last modified timestamp for use in the docs.

import * as fs from "fs";

export async function getFileTimestamp(filePath: string): Promise<string> {
	// try to get the git timestamp.
	// if it doesn't exist, fallback to file metadata.

	// Try both .md and .mdx file extensions.
	const mdFilePath = filePath + ".md";
	const mdxFilePath = filePath + ".mdx";

	let output = "";

	try {
		output = await fileStats(mdFilePath);
	} catch {
		try {
			output = await fileStats(mdxFilePath);
		} catch (err) {
			const e = new Error(`Error reading file metadata: ${err}`);
			console.error(e.message);
			throw e;
		}
	}

	return output;
}

async function fileStats(filePath: string) {
	const stats = await fs.promises.stat(filePath);
	const lastModified = stats.mtime;
	return lastModified.toDateString();
}

export function getGitTimestamp() {
	console.log("git timestamp");
}
