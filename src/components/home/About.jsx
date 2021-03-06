import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const About = () => {
  const data = useStaticQuery(graphql`
    query getAboutPost {
      allWpHomePosts(filter: { slug: { eq: "about-me" } }) {
        nodes {
          homePosts {
            description
            tagline
            title
            image {
              sourceUrl
            }
          }
        }
      }
    }
  `);

  const aboutPost = data.allWpHomePosts.nodes[0].homePosts;

  return (
    <div className="about">
      <div className="about__header">
        <h2 className="about__title">{aboutPost.title}</h2>
        <div className="about__divider"></div>
      </div>
      <div className="about__wrapper">
        <div
          className="about__description"
          dangerouslySetInnerHTML={{ __html: aboutPost.description }}
        ></div>
        <div className="about__image">
          <img src={aboutPost.image.sourceUrl} alt="" />
        </div>
      </div>
    </div>
  );
};
