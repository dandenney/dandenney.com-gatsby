/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Box, Grid } from '@theme-ui/components';
import { Link, StaticQuery, graphql } from 'gatsby';

import ImgDan from 'images/dan.svg';

const FrontEnd = () => (
  <StaticQuery
    query={graphql`
      query latestPost {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                path
                summary
                title
              }
            }
          }
        }
      }
    `}
    render={data => {
      const posts = data.allMdx.edges.filter(
        post => post.node.frontmatter.path.split('/')[1] === 'posts'
      );
      const blips = data.allMdx.edges.filter(
        blip => blip.node.frontmatter.path.split('/')[1] === 'blips'
      );
      const { path, summary, title } = posts[0].node.frontmatter;

      return (
        <Grid
          as="section"
          sx={{
            gridTemplateRows: '1fr',
            gridTemplateColumns: 'repeat(10, 1fr)',
          }}
        >
          <Box
            sx={{
              gridColumn: [
                '2 / 10',
                null,
                null,
                null,
                '1 / 6',
                null,
                null,
                '1 / 6',
                '2 / 6',
              ],
              gridRow: 1,
              px: 16,
              py: 16,
            }}
          >
            <ImgDan
              sx={{
                transform: [
                  null,
                  null,
                  null,
                  null,
                  'translateX(-40px)',
                  'translateX(-80px)',
                  null,
                  'translateX(0)',
                ],
              }}
            />
          </Box>
          <Box
            as="article"
            sx={{
              gridColumn: [
                '1 / 11',
                null,
                null,
                null,
                '5 / 11',
                null,
                null,
                '6 / 11',
              ],
              gridRow: 1,
              '&:before': {
                content: '""',
                display: 'block',
                pt: ['90%', null, null, null, '200px'],
              },
            }}
          >
            <div
              sx={{
                bg: 'background',
                maxWidth: [null, null, null, null, '700px'],
                px: [24, null, null, null, null],
                py: 16,
              }}
            >
              <Styled.h1>
                Hi! I'm Dan Denney and I'm a front-end developer at{' '}
                <Styled.a href="https://www.datacamp.com">DataCamp</Styled.a>.
              </Styled.h1>
              <Styled.p>
                I have been working closely with designers and writing HTML/CSS
                and JS since 2008ish. In 2009,{' '}
                <Styled.a href="https://twitter.com/cherriedenney">
                  Cherrie
                </Styled.a>{' '}
                and I founded{' '}
                <Styled.a href="http://frontenddesignconference.com">
                  Front-End Conf
                </Styled.a>
                , and our friends from{' '}
                <Styled.a href="http://unmatchedstyle.com">
                  Unmatched Style
                </Styled.a>{' '}
                are keeping it going these days.
              </Styled.p>
              <Styled.p>
                Nearly all of my interests and hobbies end up as some form of
                web project, with this site being my main one.
              </Styled.p>
              <Styled.p>
                My learnings are shared through blog{' '}
                <Styled.a as={Link} to="/posts">
                  posts,
                </Styled.a>{' '}
                and the latest one is{' '}
                <Styled.a as={Link} to={path}>
                  {title}
                </Styled.a>
                , on {summary.charAt(0).toLowerCase() + summary.slice(1)}.
              </Styled.p>

              <Styled.p>
                <Styled.a as={Link} to="/blips">
                  Blips
                </Styled.a>{' '}
                are where I stash quick thoughts or reactions to various things
                in the web community, and the latest is{' '}
                <Styled.a as={Link} to={blips[0].node.frontmatter.path}>
                  {blips[0].node.frontmatter.title}
                </Styled.a>
                .
              </Styled.p>
              <Styled.p>
                I add some other sections here and there, depending on what I'm
                working on.
              </Styled.p>
            </div>
          </Box>
        </Grid>
      );
    }}
  />
);

export default FrontEnd;
