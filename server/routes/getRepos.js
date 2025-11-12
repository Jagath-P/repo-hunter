import express from "express";
import { Octokit } from "@octokit/core";
import axios from "axios";
const router = express.Router();

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});
router.get("/", async (req, res) => {
  try {
    // const { topics = [], languages = [] } = req.query();

    const topics = [
      [
        "blockchain",
        "cryptocurrency",
        "ethereum",
        "cryptography",
        "smart-contracts",
        "web3",
      ],
    ];
    /*
     const topics=[
     [
     "operating-systems",
     "low-level",
     "networking",
     "systems-programming",
     "security",
     "embedded"
     ]
     ]
    
    const languages = ["c" ,"go", "python"];
    const topicPart = topics.map((t) => `topic:${t}`).join(" OR ");
    const languagepart = languages.map((l) => `language:${l}`).join(" ");
    // const keywordpart = keywords.join(" OR ");
    */

    // const query = `${topicPart} ${languagepart} good-first-issues:>0`;
    //const query = "topic:operating-systems language:c good-first-issues:>0";

    //  console.log("Search query:", query);
    // const topics = ["docker", "kubernetes", "api"]; // 10 topics
    const languages = [
      "python",
      "go",
      "cpp", // 8 languages
    ];

    // Search for these words in readme or topics
    const languagePart = languages.map((l) => `language:${l}`).join(" OR ");
    //const query = `${topicPart} ${languagePart}  stars:>100`;
    // const query = `kubernetes in:name,topics,readme,description  stars:>100`;
    //const query = `topic:kubernetes language:go stars:>100`;
    const allrepos = [];
    for (const topic of topics) {
      const topicPart = topic.join(" OR ");
      const query = `${topicPart} in:readme,topics,description,name archived:false mirror:false good-first-issues:>4 stars:>100`;
      const response = await octokit.request("GET /search/repositories", {
        q: query,
        order: "desc",
        per_page: 100,
        page: 1,
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      allrepos.push(...response.data.items);
    }
    const repos = allrepos.map((repo) => ({
      name: repo.name,
      fullname: repo.full_name,
      forks: repo.forks_count,
      stars: repo.stargazers_count,
      url: repo.html_url,
      language: repo.language,
    }));
    console.log("Final repos :", repos);
    return res.json(repos);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "GitHub search failed" });
  }
});

export default router;
