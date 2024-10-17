# Github front page updater that work with RSS feed!

This script will update the front page of your Github repository with the latest blog posts from your RSS feed. It will also update the README.md file with the latest blog posts, or any rss feed you want to use.

With this script, you can keep your Github repository up to date with the latest blog posts from your website. (or any rss feed you want to use)

this script will automatically update the README.md file and push the changes to your repository.
(You can also run this script manually)

**It will make your git green! :green_heart:**

## Getting Started

### Prerequisites for local development

- `node.js` installed on your machine

### Installing

1. `git clone` the repository
2. Run `npm ci` to install the dependencies
3. test or develop the script with `npm start`

### Usage

It has github actions that will run the script every day at 02:00 UTC. You can also run the script manually at github actions.

### Configuration

#### ./config.json

This file contains the configuration for the script. You can change the configuration to fit your needs.

```json
{
	"rssFeed": "https://veritasgarage.tistory.com/rss",
	"markdownFile": "README.md",
	"markdownHeader": "markdown/staticHeader.md",
	"markdownFooter": "markdown/staticFooter.md",
	"maxPosts": 5
}
```

#### ./markdown/staticHeader.md

This file contains the header that will be added to the beginning of the generated markdown file.
You can add any markdown content you want to be added to the beginning of the file.

if you want to start with a blank file, just remove the content of this file.

#### ./markdown/staticFooter.md

This file contains the footer that will be added to the end of the generated markdown file. You can also add any markdown content you want to be added to the end of the file.

if you want to start with a blank file, just remove the content of this file.

---
