require('dotenv').config()

const config = {
  siteTitle: "Muhammad Rusdi", // Site title.
  siteTitleShort: "Muhammad Rusdi", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Muhammad Rusdi", // Alternative site title for SEO.
  siteLogo: "src/images/muhrusdi.png", // Logo used for SEO and manifest.
  siteUrl: "https://muhrusdi.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A Front End Engineer, building web with modern stack. Care about design and new technology.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: process.env.FB_ID, // FB Application ID for using app insights
  googleAnalyticsID: process.env.GA_ID, // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "muhrusdi", // Username to display in the author segment.
  userEmail: "muhammadrusdiid@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "@muhrusdiid", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Makassar, Indonesia", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "A Front End Engineer, building web with modern stack. Care about design and new technology.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/muhrusdi",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/muhrusdiid",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "muhammadrusdiid@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. muhrusdi.com. All rights reserved.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#fff", // Used for setting manifest and progress theme colors.
  backgroundColor: "#fff" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;