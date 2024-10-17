import { writeFileSync, readFileSync } from "node:fs";
import Parser from "rss-parser";
import config from "./config.json" with { type: "json" };

const { url, maxPosts } = config;

/**
 *  Content that concatenates before Feed content for README.md.
 *  Read the ./markdown/staticHeader.md file and store it in the text variable.
 *  @returns {string} staticHeader
 */
const getStaticHeader = () => {
	const staticHeader = readFileSync("./markdown/staticHeader.md", "utf8");
	return staticHeader;
};

/** Create a RSS feed parser and make a list of the latest posts.
 * @param {string} url - RSS feed URL
 * @returns {string} text - list of the latest posts, each with a title and link
 */
const createFeedContents = async (url, maxPosts) => {
	let text = "";
	// get RSS feed from the URL
	const feed = await new Parser({
		headers: {
			Accept: "application/rss+xml, application/xml, text/xml; q=0.1",
		},
	}).parseURL(url);

	// get the feeds from the RSS feed, and store them in the text variable.
	for (let i = 0; i < Number(maxPosts); i++) {
		const { title, link } = feed.items[i];
		text += `\n#### [📝 ${title}](${link})</br>`;
	}

	return text;
};

/** Create a Footer content that concatenates after Feed content for README.md.
 * Read the ./markdown/staticFooter.md file and store it in the text variable.
 * @returns {string} staticFooter
 */
const getStaticFooter = () => {
	const staticFooter = readFileSync("./markdown/staticFooter.md", "utf8");
	return staticFooter;
};

/** Create a README.md file with the contents of the staticHeader, feedContents, and staticFooter.
 */
const createReadme = (url, maxPosts) => {
	const staticHeader = getStaticHeader();
	const feedContents = createFeedContents(url, maxPosts);
	const staticFooter = getStaticFooter();

	const readme = staticHeader + "\n\n" + feedContents + "\n\n" + staticFooter;
	writeFileSync("README.md", readme);

	console.log("README.md file created successfully!");
	return;
};

createReadme(url, maxPosts);
