// Gets the last modified timestamp for use in the docs.

import * as fs from "fs";

export async function getPageTimestamp(filePath: string): Promise<string> {
	// try to get the git timestamp.
	// if it doesn't exist, fallback to file metadata.

	return getFileTimestamp(filePath);
}

/**
 * Returns the last modified timestamp for the file located at filePath as a Promise.
 * Throws an error if no file was found or the metadata could not be read.
 *
 * @returns Promise as a string
 */
export async function getFileTimestamp(filePath: string): Promise<string> {
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

/**
 * Gets the last modified timestamp from a file located at filePath as a Promise.
 * Used internally for code reuse.
 *
 * @returns Promise as a string
 */
async function fileStats(filePath: string): Promise<string> {
	const stats = await fs.promises.stat(filePath);
	const lastModified = stats.mtime;
	const outputDate = lastModified.toLocaleString();
	return outputDate;
}

export function getGitTimestamp() {
	console.log("git timestamp");
}
