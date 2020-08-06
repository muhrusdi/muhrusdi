import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Muhammad Rusdi</h1>
    <p>Front End Engineer. UI/UX Designer. MicroStocker</p>
    <ul className="networks">
      <li><a href="https://github.com/muhrusdi">Github</a></li>
      <li><a href="https://www.facebook.com/muhrusdiid">Facebook</a></li>
      <li><a href="https://www.instagram.com/muhrusdiid">Instagram</a></li>
      <li><a href="https://twitter.com/muhrusdiid">Twitter</a></li>
      <li><a href="https://www.uplabs.com/muhrusdi">UpLabs</a></li>
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
