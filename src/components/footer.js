/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui';

import SiteNav from 'components/siteNav';

const Footer = () => (
  <Flex
    as="footer"
    sx={{
      alignItems: `center`,
      borderTop: theme => `4px double ${theme.colors.accent}`,
      fontFamily: `body`,
      justifyContent: `space-between`,
      mt: 24,
      p: 8,
    }}
  >
    <p
      sx={{
        m: 0,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a> and hosted on{' '}
      <Styled.a href="https://netlify.com">Netlify</Styled.a>.
    </p>
    <SiteNav />
  </Flex>
);

export default Footer;
