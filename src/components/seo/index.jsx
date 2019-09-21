/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import React, { Component } from "react";
// import Helmet from "react-helmet";
// import urljoin from "url-join";
// import config from "../../../site-config";

// const SEO = () => {
//   const { postNode, postPath, postSEO } = this.props;

//   let title;
//   let description;
//   let image;
//   let postURL;

//   if (postSEO) {
//     const postMeta = postNode.frontmatter;
//     ({ title } = postMeta);
//     description = postMeta.description
//       ? postMeta.description
//       : postNode.excerpt;
//     image = postMeta.cover;
//     postURL = urljoin(config.siteUrl, config.pathPrefix, postPath);
//   } else {
//     title = config.siteTitle;
//     description = config.siteDescription;
//     image = config.siteLogo;
//   }

//   image = urljoin(config.siteUrl, config.pathPrefix, image);
//   const blogURL = urljoin(config.siteUrl, config.pathPrefix);
//   const schemaOrgJSONLD = [
//     {
//       "@context": "http://schema.org",
//       "@type": "WebSite",
//       url: blogURL,
//       name: title,
//       alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
//     }
//   ];
  
//   if (postSEO) {
//     schemaOrgJSONLD.push(
//       {
//         "@context": "http://schema.org",
//         "@type": "BreadcrumbList",
//         itemListElement: [
//           {
//             "@type": "ListItem",
//             position: 1,
//             item: {
//               "@id": postURL,
//               name: title,
//               image
//             }
//           }
//         ]
//       },
//       {
//         "@context": "http://schema.org",
//         "@type": "BlogPosting",
//         url: blogURL,
//         name: title,
//         alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
//         headline: title,
//         image: {
//           "@type": "ImageObject",
//           url: image
//         },
//         description
//       }
//     );
//   }
//   return (
//     <Helmet>
//       {/* General tags */}
//       <meta name="description" content={description} />
//       <meta name="image" content={image} />

//       {/* Schema.org tags */}
//       <script type="application/ld+json">
//         {JSON.stringify(schemaOrgJSONLD)}
//       </script>

//       {/* OpenGraph tags */}
//       <meta property="og:url" content={postSEO ? postURL : blogURL} />
//       {postSEO ? <meta property="og:type" content="article" /> : null}
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:image" content={image} />
//       <meta
//         property="fb:app_id"
//         content={config.siteFBAppID ? config.siteFBAppID : ""}
//       />

//       {/* Twitter Card tags */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta
//         name="twitter:creator"
//         content={config.userTwitter ? config.userTwitter : ""}
//       />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={image} />
//       {/* Google Tag Manager */}
//       <script dangerouselySetInnerHTML={{__html: `
//         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//         'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//         })(window,document,'script','dataLayer','GTM-WKMGM4B');
//       `}}/>
//       {/* End Google Tag Manager */}
//     </Helmet>
//   )
// }

// export default SEO;
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang = "id", meta, title, image, type = "website", url = "/" }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            fbId
            gaId
          }
        }
      }
    `
  )

  
  const metaDescription = description || site.siteMetadata.description
  const ogImage = image ? image : site.siteMetadata.image
  
  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: url,
      name: title ? title : site.siteMetadata.title,
      alternateName: ""
    }
  ]
  
  if (type === "article") {
    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": url,
              name: title ? title : site.siteMetadata.title,
              image: ogImage
            }
          }
        ]
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: url,
        name: title ? title : site.siteMetadata.title,
        alternateName: "",
        headline: title ? title : site.siteMetadata.title,
        image: {
          "@type": "ImageObject",
          url: ogImage
        },
        description: metaDescription
      }
    );
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={ title ? title : site.siteMetadata.title }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: image,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: ogImage,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `fb:app_id`,
          content: site.siteMetadata.fbId,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
