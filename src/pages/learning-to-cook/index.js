import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import SEO from 'components/seo';

import Intro from 'components/LearningToCook/Intro';
import Recipes from 'components/LearningToCook/Recipes';
import Journal from 'components/LearningToCook/Journal';

import { LearningToCook, Wrapper } from 'components/LearningToCook/styles';

const LearningToCookPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Learning to Cook"
        keywords={[`foodie`, `learning to cook`, `culinarian`]}
      />
      <LearningToCook>
        <Intro />

        <Wrapper>
          <Journal data={data.allMarkdownRemark.edges} />
          <Recipes />
        </Wrapper>
      </LearningToCook>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            date
            summary
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 480) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default LearningToCookPage;
