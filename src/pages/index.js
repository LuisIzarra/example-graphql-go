import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <translate>
            <Link
              className="button button--secondary button--lg"
              to="/docs/tutorial-basics/quick-start"
            >
              Quick Start →
            </Link>
          </translate>
        </div>
      </div>
    </header>
  );
}

function GitHubStargazersShield() {
  return (
    <div style={{ paddingTop: "8px" }}>
      <a
        href="https://github.com/graphql-go/graphql/stargazers"
        className="github-stargazers"
        target="_blank"
      >
        <img src="https://img.shields.io/github/stars/graphql-go/graphql?style=social"></img>
      </a>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    const githubStargazersNodes =
      document.getElementsByClassName("github-stargazers");
    const githubStargazersNode = githubStargazersNodes[0];
    const githubStargazersParent = githubStargazersNode.parentNode;

    const temp = document.createElement("div");
    ReactDOM.render(<GitHubStargazersShield />, temp);

    githubStargazersParent.replaceChild(temp, githubStargazersNode);
  }, []);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
