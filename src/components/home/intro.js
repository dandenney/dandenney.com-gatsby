import React from 'react';

import { Section, Dan } from 'components/home/introStyles';

import Social from 'components/home/social';

import Illustration from 'images/dan.svg';

const Intro = () => (
  <Section>
    <div>
      <h1>
        Hi! I'm Dan Denney and I'm a front-end developer at{' '}
        <a href="https://www.datacamp.com">DataCamp</a>.
      </h1>

      <p>
        I have been working closely with designers and writing HTML/CSS and JS
        since 2008ish. In 2009,{' '}
        <a href="https://twitter.com/cherriedenney">Cherrie</a> and I founded{' '}
        <a href="http://frontenddesignconference.com">Front-End Conf</a>, and
        our friends from <a href="http://unmatchedstyle.com">Unmatched Style</a>{' '}
        are keeping it going these days.
      </p>

      <Social />
    </div>

    <Dan>
      <Illustration />
    </Dan>
  </Section>
);

export default Intro;
