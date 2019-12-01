/** @jsx jsx */
import { jsx } from 'theme-ui';

import Layout from 'components/layout';
import FrontEnd from 'components/front-end';
import SEO from 'components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main
      sx={{
        bg: `background`,
      }}
    >
      <FrontEnd />
    </main>
  </Layout>
);

export default IndexPage;
