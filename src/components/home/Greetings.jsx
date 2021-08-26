import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const Greetings = () => {
  const data = useStaticQuery(graphql`
    query getGreetingPost {
      allWpHomePosts(filter: { slug: { eq: "initial-greeting" } }) {
        nodes {
          homePosts {
            description
            tagline
            title
          }
        }
      }
    }
  `);

  const greetingPost = data.allWpHomePosts.nodes[0].homePosts;

  return (
    <div className="greeting">
      <div className="greeting__tagline">{greetingPost.tagline}</div>
      <div className="greeting__title">
        <h1>{greetingPost.title}</h1>
      </div>
      <div className="greeting__description">{greetingPost.description}</div>
      <div className="greeting__cta">
        <a href="say-hello">
          <button>Let's talk</button>
        </a>
      </div>
    </div>
  );
};
