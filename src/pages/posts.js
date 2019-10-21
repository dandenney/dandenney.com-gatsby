import { graphql, Link } from 'gatsby';
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { ListNav } from 'patterns';

const PostsPage = ({ data }) => {
  const posts = data.allMdx.edges;
  return (
    <Layout>
      <SEO title="Posts" />
      <main
        sx={{
          bg: 'background',
          px: 16,
          textAlign: 'center',
        }}
      >
        <Styled.h1>Posts</Styled.h1>

        <ListNav>
          {posts.map(post => {
            const postInfo = post.node.frontmatter;
            const postPath = postInfo.path.split('/')[1];
            if (postPath === 'posts') {
              return (
                <li>
                  <Link
                    sx={{
                      display: `block`,
                      fontSize: [1, 3, 4],
                      fontWeight: `heading`,
                    }}
                    to={postInfo.path}
                    key={postInfo.path}
                  >
                    {postInfo.title}
                  </Link>
                  <span
                    sx={{
                      display: `block`,
                      mt: 4,
                      textTransform: `uppercase`,
                    }}
                  >
                    {postInfo.tags[0]} | {post.node.timeToRead} minutes
                  </span>
                </li>
              );
            }
            return null;
          })}
        </ListNav>
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PostsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            tags
            title
          }
          timeToRead
        }
      }
    }
  }
`;

export default PostsPage;
