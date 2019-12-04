/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Flex } from '@theme-ui/components';

import ImgAbbyLibby from 'images/abby-and-libby.jpg';

const TrueCrimeResearchers = () => (
  <section
    sx={{
      px: 16,
      py: 32,
    }}
  >
    <h2
      sx={{
        color: '#4f5d78',
        fontFamily: 'body',
        fontSize: [
          'calc(6vw + 6vh + 1vmin)',
          'calc(6vw + 6vh + 6vmin)',
          'calc(7vw + 7vh + 7vmin)',
          'calc(8vw + 8vh + 8vmin)',
          'calc(9vw + 9vh + 9vmin)',
          'calc(10vw + 10vh + 10vmin)',
        ],
        lineHeight: 1,
        my: 0,
        textAlign: 'center',
      }}
    >
      58.83<sup>%</sup>
    </h2>
    <Styled.p
      sx={{
        fontSize: ['24px !important', null, null, null, '32px !important'],
        mt: 0,
        textAlign: 'center',
      }}
    >
      As of December 2018, that's the{' '}
      <Styled.a href="http://murderdata.org">
        solved rate for homicides
      </Styled.a>{' '}
      in America.
    </Styled.p>

    <div
      sx={{
        borderTop: t => `1px solid ${t.colors.accent}`,
        maxWidth: '620px',
        mx: 'auto',
        px: [8, null, null, 16],
        pt: 4,
      }}
    >
      <Styled.p>
        I've been fascinated by crime since I was a kid, and as a genre, true
        crime is popular these days. I'm working on a project to try to be a
        part of the community of people who are trying to help find answers.
      </Styled.p>
      <Styled.p>
        <Styled.a href="https://nostalgic-cray-3d0a8a.netlify.com">
          True Crime Researchers
        </Styled.a>{' '}
        is a curated collection of missing person and homicide cases that I have
        dove into. One of the research challenges is that the information is all
        over the web, so I try to bring enough together for people to get
        started. I see it as part-database, part-landing-page for cases. It's
        all open-source, and the Airtable is open as well.
      </Styled.p>
    </div>

    <Flex
      sx={{
        justifyContent: 'center',
        pt: 24,
      }}
    >
      <Styled.h3
        sx={{
          color: '#4f5d78',
          mr: 16,
          mt: 0,
        }}
      >
        Liberty
        <br />
        German
      </Styled.h3>
      <Styled.img
        alt="Abby and Libby"
        src={ImgAbbyLibby}
        sx={{
          p: 4,
          border: t => `1px solid ${t.colors.accent}`,
        }}
        width="450"
      />
      <Styled.h3
        sx={{
          alignSelf: 'flex-end',
          color: '#4f5d78',
          ml: 16,
          mt: 0,
        }}
      >
        Abigail
        <br />
        Williams
      </Styled.h3>
    </Flex>

    <Styled.p sx={{ mt: 12, textAlign: 'center' }}>
      Learn about the{' '}
      <Styled.a href="https://nostalgic-cray-3d0a8a.netlify.com/cases/delphi-murders">
        Delphi Murders
      </Styled.a>{' '}
      and other cases.
    </Styled.p>
  </section>
);

export default TrueCrimeResearchers;
