import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { JournalListStyles } from 'components/LearningToCook/JournalList/styles';

const JournalList = ({ data }) => {
  return (
    <JournalListStyles>
      {data.map(({ node }) => {
        const journalPath = node.frontmatter.path.split('/')[2];
        const journalDate = new Date(node.frontmatter.date);

        if (journalPath === 'journal') {
          return (
            <Link key={node.id} to={node.frontmatter.path}>
              <Img
                sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
              />
              <div className="meta">
                <h3>{node.frontmatter.title}</h3>
                <time dateTime={journalDate}>{journalDate.toDateString()}</time>
              </div>
            </Link>
          );
        }

        return null;
      })}
    </JournalListStyles>
  );
};

export default JournalList;
