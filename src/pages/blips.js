import { graphql, Link } from 'gatsby';
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

import pluralize from 'helpers/pluralize';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { ListNav } from 'patterns';

const BlipsPage = ({ data }) => {
  const blips = data.allMdx.edges;
  return (
    <Layout>
      <SEO title="Blips" />
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
          Blips
        </Styled.h1>

        <ListNav>
          {blips.map(blip => {
            const blipMeta = blip.node.frontmatter;
            const blipPath = blipMeta.path.split('/')[1];
            if (blipPath === 'blips') {
              return (
                <li>
                  <Styled.a
                    as={Link}
                    sx={{
                      fontSize: [1, 3, 4],
                      fontWeight: `heading`,
                    }}
                    to={blipMeta.path}
                    key={blipMeta.path}
                  >
                    {blipMeta.title}
                  </Styled.a>
                  <span
                    sx={{
                      display: `block`,
                      mt: 4,
                      textTransform: `capitalize`,
                    }}
                  >
                    {blip.node.timeToRead}{' '}
                    {pluralize(blip.node.timeToRead, 'minute', 'minutes')}
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
  query BlipsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            title
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlipsPage;
