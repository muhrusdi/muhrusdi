import Globalnav from 'Components/Globalnav'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import favicon32 from '../../images/favicon-32x32.png'
import favicon16 from '../../images/favicon-16x16.png'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <html lang="en" />
          <title>Muhammad Rusdi</title>
          <meta name="description" content="Front End Engineer: Javascript, React, Nextjs, Gatsbyjs, Reduxjs. Swift & Objective-C."/>
          <link rel="mask-icon" href="../../images/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>

          <link rel="manifest" href="../../images/site.webmanifest"/>
          <link rel="apple-touch-icon" sizes="152x152" href="../../images/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
          <link rel="canonical" href="https://muhrusdi.com"/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@muhrusdi"/>
          <meta name="twitter:creator" content="@muhrusdiid"/>
          <meta name="twitter:title" content="Muhammad Rusdi"/>
          <meta name="twitter:description" content="Front End Engineer: Javascript, React, Nextjs, Gatsbyjs, Reduxjs. Swift & Objective-C."/>
          <meta name="twitter:image:src" content="../../images/og-image.jpg"/>
          <meta property="og:image" content="../../images/og-image.jpg"/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://muhrusdi.com"/>
          <meta property="og:locale" content="id_ID"/>
          <meta property="og:site_name" content="Muhammad Rusdi"/>
        </Helmet>
        <Globalnav/>
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout