import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const CurrentWork = () => {
  const data = useStaticQuery(graphql`
    query getCurrentWork {
      allWpWorkExperience(limit: 1, sort: { order: ASC, fields: date }) {
        nodes {
          experience {
            accomplishmentStatements
            company
            endDate
            position
            startDate
          }
        }
      }
    }
  `);

  const currentWorkPost = data.allWpWorkExperience.nodes[0].experience;

  return (
    <>
      <div className="experience">
        <div className="experience__header">
          <h2 className="experience__title">My current work</h2>
          <div className="experience__divider"></div>
        </div>

        <div className="experience__wrapper">
          <div className="experience__info">
            <div className="experience__top">
              <p className="experience__position">{currentWorkPost.position}</p>
              <p className="experience__company">{currentWorkPost.company}</p>
            </div>

            <div className="experience__date">
              <p className="experience__startdate">
                {currentWorkPost.startDate}
                {' - '}
              </p>
              <p className="experience__enddate">
                {currentWorkPost.endDate ? currentWorkPost.endDate : 'Present'}
              </p>
            </div>
          </div>
          <div
            className="experience__statements"
            dangerouslySetInnerHTML={{
              __html: currentWorkPost.accomplishmentStatements,
            }}
          />
        </div>

        <div className="experience__cta">
          <a href="category/work-experience/">
            <button>View more</button>
          </a>
        </div>
      </div>
    </>
  );
};
