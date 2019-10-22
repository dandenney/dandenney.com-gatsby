import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { ImgListNav } from 'patterns';

const LearningToCookPage = ({ data }) => {
  const posts = data.allMdx.edges;
  return (
    <Layout>
      <SEO title="Learning to Cook" />
      <main
        sx={{
          bg: 'background',
          px: 16,
          textAlign: 'center',
        }}
      >
        <Styled.h1
          sx={{
            mt: 16,
          }}
        >
          Learning to Cook
        </Styled.h1>

        <ImgListNav>
          {posts.map(post => {
            const postInfo = post.node.frontmatter;
            const postPath = postInfo.path.split('/')[1];
            console.log(postPath + postInfo);
            if (postPath === 'learning-to-cook') {
              return (
                <li
                  sx={{
                    minWidth: [`100%`, `316px`],
                  }}
                >
                  <Link
                    sx={{
                      color: `action`,
                      display: `block`,
                      fontSize: 2,
                      fontWeight: `heading`,
                      pb: 5,
                      pt: 9,
                      px: 9,
                      textDecoration: `none`,
                    }}
                    to={postInfo.path}
                    key={postInfo.path}
                  >
                    <Img
                      sizes={postInfo.featuredImage.childImageSharp.sizes}
                      sx={{
                        mb: 4,
                        width: `100%`,
                      }}
                    />
                    {postInfo.title}
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </ImgListNav>
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query LearningsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            tags
            title
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 250) {
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
