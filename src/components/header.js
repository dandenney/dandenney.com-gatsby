import { Link } from 'gatsby';

/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';

import SiteNav from 'components/siteNav';

import avatar from 'images/avatar-circle.png';

const Header = () => (
  <Flex
    as="header"
    sx={{
      borderBottom: theme => `4px double ${theme.colors.accent}`,
      justifyContent: `space-between`,
      p: 8,
    }}
  >
    <Link
      to="/"
      sx={{
        alignItems: `center`,
        display: `flex`,
        transition: `transform 0.3s`,
        '&:hover': {
          transform: `scale(1.1)`,
        },
      }}
    >
      <img
        alt="Illustration of Dan in a circle"
        src={avatar}
        sx={{ mr: 4 }}
        width="40"
      />
    </Link>
    <SiteNav />
  </Flex>
);

export default Header;
