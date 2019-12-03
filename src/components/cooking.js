/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Box, Grid } from '@theme-ui/components';
import { Link } from 'gatsby';

import ImgCooking from 'images/cooking-2.jpg';

const Cooking = () => (
  <Grid
    as="section"
    sx={{
      gridTemplateRows: '1fr',
      gridTemplateColumns: 'repeat(10, 1fr)',
      clipPath: [null, null, null, 'polygon(0 0, 100% 10%, 100% 100%, 0 90%)'],
    }}
  >
    <Box
      sx={{
        gridColumn: '1 / 11',
        gridRow: '1 / 2',
      }}
    >
      <Styled.img
        alt="Smoker with hanging meat"
        loading="lazy"
        src={ImgCooking}
        width="1440"
      />
    </Box>
    <Grid
      sx={{
        alignItems: 'center',
        gridColumn: [
          '1 / 11',
          null,
          null,
          '4 / 11',
          '5 / 10',
          '6 / 10',
          '7 / 10',
        ],
        gridRow: '1',
      }}
    >
      <div
        sx={{
          bg: 'background',
          m: ['24px 24px 0 24px', null, '0 24px', null, 0],
          p: 16,
          position: 'relative',
          '&::after': {
            borderBottom: '3px solid #e67235',
            borderRight: '3px solid #e67235',
            bottom: '-12px',
            content: '""',
            height: '100%',
            pointerEvents: 'none',
            position: 'absolute',
            right: '-12px',
            width: '100%',
          },
        }}
      >
        <Styled.h2
          sx={{
            mt: 0,
          }}
        >
          Learning to Cook
        </Styled.h2>
        <Styled.p>
          I've been learning to cook and there's a lot of crossover with
          front-end. I take someone else's design, aka recipe, and learn the
          skills to make it come to life. Sometimes it's beautiful and sometimes
          it's terrible.
        </Styled.p>
        <Styled.p
          sx={{
            mb: 0,
          }}
        >
          Of course, I have to put my learnings online in a{' '}
          <Styled.a as={Link} to="/learning-to-cook">
            cooking journal
          </Styled.a>{' '}
          of sorts.
        </Styled.p>
      </div>
    </Grid>
  </Grid>
);

export default Cooking;
