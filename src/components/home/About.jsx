import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const About = () => {
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
    <div class="about">
      <div class="about__header">
        <h2 class="about__title">{aboutPost.title}</h2>
        <div class="about__divider"></div>
      </div>
      <div class="about__wrapper">
        <div class="about__description">
          <p dangerouslySetInnerHTML={{ __html: aboutPost.description }}></p>
        </div>
        <div class="about__image">
          <img src={aboutPost.image.sourceUrl} alt="Jose Arteaga Photo" />
        </div>
      </div>
    </div>
  );
};

export default About;
