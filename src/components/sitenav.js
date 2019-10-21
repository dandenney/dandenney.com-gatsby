import { Link } from "gatsby"
import React from "react"

import { Container } from "components/siteNavStyles"

const SiteNav = () => (
  <Container>
    <Link to="/posts">Posts</Link>
    <Link to="/blips">Blips</Link>
  </Container>
)

export default SiteNav
