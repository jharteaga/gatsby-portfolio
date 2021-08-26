import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const TopProjects = () => {
  const data = useStaticQuery(graphql`
    query getHomeProjects {
      allWpHomePosts(filter: { slug: { eq: "home-projects" } }) {
        nodes {
          homePosts {
            title
            description
          }
        }
      }
      allWpProjects(limit: 3) {
        nodes {
          featuredImage {
            node {
              sourceUrl
              id
            }
          }
        }
      }
    }
  `);

  const topProjectMeta = data.allWpHomePosts.nodes[0].homePosts;
  const topProjects = data.allWpProjects.nodes;

  return (
    <div className="top-projects">
      <div className="top-projects__header">
        <h2 className="top-projects__title">{topProjectMeta.title}</h2>
        <div className="top-projects__divider"></div>
      </div>
      <p className="top-projects__text">{topProjectMeta.description}</p>
      <div className="top-projects__wrapper">
        {topProjects.map((project) => (
          <div
            className="top-projects__img"
            key={project.featuredImage.node.id}
          >
            <img src={project.featuredImage.node.sourceUrl} alt="" />
          </div>
        ))}
      </div>
      <div className="top-projects__cta">
        <a href="category/projects">
          <button>View more</button>
        </a>
      </div>
    </div>
  );
};
