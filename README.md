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
2. Run `npm install` to install the dependencies
3. test or develop the script with `npm start`

### Usage

It has github actions that will run the script every day at 02:00 UTC. You can also run the script manually at github actions.

### Configuration

#### GitHub Actions Setting

1. Fork this repository
2. Go to the `Settings` tab of your repository
3. Go to the `Actions` section on the left sidebar
4. Click on the `General` tab
5. Enable the `Workflow permissions` feature to allow the workflow to run
6. `Read and write` access is required to push changes to the repository
7. Check the `Allow GitHub Actions to create and approve pull requests` checkbox

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



#### [📝 [ML] 통계 기초 :: 추론 통계](https://veritasgarage.tistory.com/282)</br>
#### [📝 [ML] 통계 개념 기초 :: 기술통계](https://veritasgarage.tistory.com/281)</br>
#### [📝 [WEB_HTTP] Cookie와 Session](https://veritasgarage.tistory.com/280)</br>
#### [📝 [RAG] RAG와 ELK](https://veritasgarage.tistory.com/279)</br>
#### [📝 [Python] Django Basics](https://veritasgarage.tistory.com/278)</br>

---

# Footer that will be added to the end of the generated markdown file

## License (samples)

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to
- Inspiration
- etc
