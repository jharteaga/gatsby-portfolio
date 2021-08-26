import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query getContactPost {
      allWpHomePosts(filter: { title: { eq: "Contact" } }) {
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

  const contactPost = data.allWpHomePosts.nodes[0].homePosts;

  return (
    <footer className="site-footer" id="site-footer">
      <div className="contact">
        <h2 className="contact__title">{contactPost?.title}</h2>
        <p className="contact__tagline">{contactPost?.tagline}</p>
        <div className="contact__cta">
          <button>{contactPost?.description}</button>
        </div>
      </div>
      <p className="attribution">&copy; 2021 Copyright - Jose Arteaga</p>
    </footer>
  );
};

export default Footer;
