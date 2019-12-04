/** @jsx jsx */
import { jsx } from 'theme-ui';

import Cooking from 'components/cooking';
import Layout from 'components/layout';
import FrontEnd from 'components/front-end';
import SEO from 'components/seo';
import TrueCrimeResearchers from 'components/true-crime-researchers';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main
      sx={{
        bg: `background`,
      }}
    >
      <FrontEnd />
      <Cooking />
      <TrueCrimeResearchers />
    </main>
  </Layout>
);

export default IndexPage;
