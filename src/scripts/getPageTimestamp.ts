// Gets the last modified timestamp for use in the docs.

import * as fs from "fs";
import { spawn } from "cross-spawn";

export async function getPageTimestamp(filePath: string): Promise<string> {
	// try to get the git timestamp.
	// if it doesn't exist, fallback to file metadata.

	let output = "";

	try {
		output = await getGitTimestamp(filePath);
	} catch (err) {
		const e = new Error(`Error running git log: ${err}`);
		console.error(e.message);
		throw e;
	}

	// If git log is successful but does not return a date,
	// fallback to file metadata
	if (output === "Invalid Date") {
		try {
			output = await getFileTimestamp(filePath);
		} catch (err) {
			const e = new Error(`Error getting file timestamp: ${err}`);
			console.error(e.message);
			throw e;
		}
	}

	return output;
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
	const outputDate = formatDate(lastModified);
	return outputDate;
}

function formatDate(date: Date): string {
	return date.toLocaleString();
}

export async function getGitTimestamp(filePath: string): Promise<string> {
	const mdFilePath = filePath + ".md";
	const mdxFilePath = filePath + ".mdx";

	let output = "";

	try {
		output = await tryGitLog(mdFilePath);
	} catch {
		try {
			output = await tryGitLog(mdxFilePath);
		} catch (err) {
			const e = new Error(`Error getting git log: ${err}`);
			console.error(e.message);
			throw e;
		}
	}

	return output;
}

export async function tryGitLog(filePath: string): Promise<string> {
	return new Promise((resolve, reject) => {
		const child = spawn("git", ["log", "-1", "--format=%cd", filePath]);

		let result = "";
		child.stdout.on("data", (data) => {
			result += String(data);
		});

		child.stderr.on("data", (data) => {
			reject(data.toString());
		});

		child.on("close", (code) => {
			if (code === 0) {
				const timestampDate = new Date(result.trim());
				resolve(formatDate(timestampDate));
			}
		});
	});
}
