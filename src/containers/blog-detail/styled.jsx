import styled from "@emotion/styled"

export const BlogDetailWrap = styled.div`

.wp-block-columns {
    display: flex;
    flex-wrap: wrap
}
  
/* Blocks */
/* !Block styles */
.entry .entry-content > *,
.entry .entry-summary > * {
  margin: 32px auto !important;
  max-width: 100%;
  a {
    color: #1f8abf;
    text-decoration: none;
    code {
      white-space: pre-wrap;
      word-break: break-word;
    }
  }
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *,
  .entry .entry-summary > * {
    max-width: calc(8 * (100vw / 16) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content > *,
  .entry .entry-summary > * {
    max-width: calc(6 * (100vw / 16) - 28px);
  }
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *,
  .entry .entry-summary > * {
    margin: 32px 0;
  }
}

.entry .entry-content > * > *:first-child,
.entry .entry-summary > * > *:first-child {
  margin-top: 0;
}

.entry .entry-content > * > *:last-child,
.entry .entry-summary > * > *:last-child {
  margin-bottom: 0;
}

.entry .entry-content > *.alignwide,
.entry .entry-summary > *.alignwide {
  margin-left: auto;
  margin-right: auto;
  clear: both;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *.alignwide,
  .entry .entry-summary > *.alignwide {
    width: 100%;
    max-width: 100%;
  }
}

.entry .entry-content > *.alignfull,
.entry .entry-summary > *.alignfull {
  position: relative;
  left: -1rem;
  width: calc( 100% + (2 * 1rem));
  max-width: calc( 100% + (2 * 1rem));
  clear: both;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *.alignfull,
  .entry .entry-summary > *.alignfull {
    margin-top: calc(2 * 1rem);
    margin-bottom: calc(2 * 1rem);
    left: calc( -12.5% - 75px);
    width: calc( 125% + 150px);
    max-width: calc( 125% + 150px);
  }
}

.entry .entry-content > *.alignleft,
.entry .entry-summary > *.alignleft {
  /*rtl:ignore*/
  float: left;
  max-width: calc(5 * (100vw / 12));
  margin-top: 0;
  margin-left: 0;
  /*rtl:ignore*/
  margin-right: 1rem;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *.alignleft,
  .entry .entry-summary > *.alignleft {
    max-width: calc(4 * (100vw / 12));
    /*rtl:ignore*/
    margin-right: calc(2 * 1rem);
  }
}

.entry .entry-content > *.alignright,
.entry .entry-summary > *.alignright {
  /*rtl:ignore*/
  float: right;
  max-width: calc(5 * (100vw / 12));
  margin-top: 0;
  margin-right: 0;
  /*rtl:ignore*/
  margin-left: 1rem;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *.alignright,
  .entry .entry-summary > *.alignright {
    max-width: calc(4 * (100vw / 12));
    margin-right: 0;
    /*rtl:ignore*/
    margin-left: calc(2 * 1rem);
  }
}

.entry .entry-content > *.aligncenter,
.entry .entry-summary > *.aligncenter {
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *.aligncenter,
  .entry .entry-summary > *.aligncenter {
    max-width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content > *.aligncenter,
  .entry .entry-summary > *.aligncenter {
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 768px) {
  .entry .entry-content > *.aligncenter,
  .entry .entry-summary > *.aligncenter {
    margin-left: 0;
    margin-right: 0;
  }
}

/*
 * Unset nested content selector styles
 * - Prevents layout styles from cascading too deeply
 * - helps with plugin compatibility
 */
.entry .entry-content .entry-content,
.entry .entry-content .entry-summary,
.entry .entry-content .entry,
.entry .entry-summary .entry-content,
.entry .entry-summary .entry-summary,
.entry .entry-summary .entry {
  margin: inherit;
  max-width: inherit;
  padding: inherit;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .entry-content,
  .entry .entry-content .entry-summary,
  .entry .entry-content .entry,
  .entry .entry-summary .entry-content,
  .entry .entry-summary .entry-summary,
  .entry .entry-summary .entry {
    margin: inherit;
    max-width: inherit;
    padding: inherit;
  }
}

.entry .entry-content p.has-background {
  padding: 20px 30px;
}

.entry .entry-content .wp-block-audio {
  width: 100%;
}

.entry .entry-content .wp-block-audio audio {
  width: 100%;
}

.entry .entry-content .wp-block-audio.alignleft audio,
.entry .entry-content .wp-block-audio.alignright audio {
  max-width: 198px;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-audio.alignleft audio,
  .entry .entry-content .wp-block-audio.alignright audio {
    max-width: 384px;
  }
}

@media only screen and (min-width: 1379px) {
  .entry .entry-content .wp-block-audio.alignleft audio,
  .entry .entry-content .wp-block-audio.alignright audio {
    max-width: 385.44px;
  }
}

.entry .entry-content .wp-block-video video {
  width: 100%;
}

.entry .entry-content .wp-block-button .wp-block-button__link {
  transition: background 150ms ease-in-out;
  border: none;
  font-size: 0.88889em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.2;
  box-sizing: border-box;
  font-weight: bold;
  text-decoration: none;
  padding: 0.76rem 1rem;
  outline: none;
  outline: none;
}

.entry .entry-content .wp-block-button .wp-block-button__link:not(.has-background) {
  background-color: #0073aa;
}

.entry .entry-content .wp-block-button .wp-block-button__link:not(.has-text-color) {
  color: white;
}

.entry .entry-content .wp-block-button .wp-block-button__link:hover {
  color: white;
  background: #111;
  cursor: pointer;
}

.entry .entry-content .wp-block-button .wp-block-button__link:focus {
  color: white;
  background: #111;
  outline: thin dotted;
  outline-offset: -4px;
}

.entry .entry-content .wp-block-button:not(.is-style-squared) .wp-block-button__link {
  border-radius: 5px;
}

.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link,
.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:focus,
.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:active {
  transition: all 150ms ease-in-out;
  border-width: 2px;
  border-style: solid;
}

.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:not(.has-background),
.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:focus:not(.has-background),
.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:active:not(.has-background) {
  background: transparent;
}

.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:not(.has-text-color),
.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:focus:not(.has-text-color),
.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:active:not(.has-text-color) {
  color: #0073aa;
  border-color: currentColor;
}

.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:hover {
  color: white;
  border-color: #111;
}

.entry .entry-content .wp-block-button.is-style-outline .wp-block-button__link:hover:not(.has-background) {
  color: #111;
}

.entry .entry-content .wp-block-archives,
.entry .entry-content .wp-block-categories,
.entry .entry-content .wp-block-latest-posts {
  padding: 0;
  list-style: none;
}

.entry .entry-content .wp-block-archives li > a,
.entry .entry-content .wp-block-categories li > a,
.entry .entry-content .wp-block-latest-posts li > a {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: calc(22px * 1.125);
  font-weight: bold;
  line-height: 1.2;
  text-decoration: none;
}

.entry .entry-content .wp-block-archives.aligncenter,
.entry .entry-content .wp-block-categories.aligncenter {
  text-align: center;
}

.entry .entry-content .wp-block-categories ul {
  padding-top: 0.75rem;
}

.entry .entry-content .wp-block-categories li ul {
  list-style: none;
  padding-left: 0;
}

.entry .entry-content .wp-block-categories ul {
  counter-reset: submenu;
}

.entry .entry-content .wp-block-categories ul > li > a::before {
  font-family: "NonBreakingSpaceOverride", "Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif;
  font-weight: normal;
  content: "– " counters(submenu, "– ", none);
  counter-increment: submenu;
}

.entry .entry-content .wp-block-latest-posts .wp-block-latest-posts__post-date {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 0.71111em;
  color: #767676;
  line-height: 1.2;
}

.entry .entry-content .wp-block-latest-posts .wp-block-latest-posts__post-full-content,
.entry .entry-content .wp-block-latest-posts .wp-block-latest-posts__post-excerpt {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.entry .entry-content .wp-block-latest-posts li {
  padding-bottom: 0.5rem;
}

.entry .entry-content .wp-block-latest-posts li.menu-item-has-children, .entry .entry-content .wp-block-latest-posts li:last-child {
  padding-bottom: 0;
}

.entry .entry-content .wp-block-latest-posts li :not(:last-child) .wp-block-latest-posts__post-excerpt {
  padding-bottom: 0.5rem;
}

.entry .entry-content .wp-block-latest-posts.is-grid li {
  border-top: 2px solid #ccc;
  padding-top: 1rem;
  margin-bottom: 2rem;
}

.entry .entry-content .wp-block-latest-posts.is-grid li a:after {
  content: '';
}

.entry .entry-content .wp-block-latest-posts.is-grid li:last-child {
  margin-bottom: auto;
}

.entry .entry-content .wp-block-latest-posts.is-grid li:last-child a:after {
  content: '';
}

.entry .entry-content .wp-block-preformatted {
  font-size: 0.71111em;
  line-height: 1.8;
  padding: 1rem;
}

.entry .entry-content .wp-block-verse {
  font-family: "NonBreakingSpaceOverride", "Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif;
  font-size: 22px;
  line-height: 1.8;
}

.entry .entry-content .has-drop-cap:not(:focus):first-letter {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 3.375em;
  line-height: 1;
  font-weight: bold;
  margin: 0 0.25em 0 0;
}

.entry .entry-content .wp-block-pullquote {
  border-color: transparent;
  border-width: 2px;
  padding: 1rem;
}

.entry .entry-content .wp-block-pullquote blockquote {
  color: #111;
  border: none;
  margin-top: calc(4 * 1rem);
  margin-bottom: calc(4.33 * 1rem);
  margin-right: 0;
  padding-left: 0;
}

.entry .entry-content .wp-block-pullquote p {
  font-size: 1.6875em;
  font-style: italic;
  line-height: 1.3;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
}

.entry .entry-content .wp-block-pullquote p em {
  font-style: normal;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-pullquote p {
    font-size: 2.25em;
  }
}

.entry .entry-content .wp-block-pullquote cite {
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.6;
  text-transform: none;
  color: #767676;
  /*
			 * This requires a rem-based font size calculation instead of our normal em-based one,
			 * because the cite tag sometimes gets wrapped in a p tag. This is equivalent to $font-size_xs.
			 */
  font-size: calc(1rem / (1.25 * 1.125));
}

.entry .entry-content .wp-block-pullquote.alignleft, .entry .entry-content .wp-block-pullquote.alignright {
  width: 100%;
  padding: 0;
}

.entry .entry-content .wp-block-pullquote.alignleft blockquote, .entry .entry-content .wp-block-pullquote.alignright blockquote {
  margin: 1rem 0;
  padding: 0;
  text-align: left;
  max-width: 100%;
}

.entry .entry-content .wp-block-pullquote.alignleft blockquote p:first-child, .entry .entry-content .wp-block-pullquote.alignright blockquote p:first-child {
  margin-top: 0;
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color {
  background-color: #0073aa;
  padding-left: 0;
  padding-right: 0;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-pullquote.is-style-solid-color {
    padding-left: 10%;
    padding-right: 10%;
  }
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color p {
  font-size: 1.6875em;
  line-height: 1.3;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-pullquote.is-style-solid-color p {
    font-size: 2.25em;
  }
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color a {
  color: #fff;
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color cite {
  color: inherit;
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote {
  max-width: 100%;
  color: #fff;
  padding-left: 0;
  margin-left: 1rem;
  margin-right: 1rem;
}

.entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-text-color p,
.entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-text-color a, .entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-primary-color, .entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-secondary-color, .entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-dark-gray-color, .entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-light-gray-color, .entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-white-color {
  color: inherit;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote {
    margin-left: 0;
    margin-right: 0;
  }
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-pullquote.is-style-solid-color.alignright, .entry .entry-content .wp-block-pullquote.is-style-solid-color.alignleft {
    padding: 1rem calc(2 * 1rem);
  }
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-pullquote.is-style-solid-color.alignfull {
    padding-left: calc(10% + 58px + (2 * 1rem));
    padding-right: calc(10% + 58px + (2 * 1rem));
  }
}

.entry .entry-content .wp-block-quote:not(.is-large), .entry .entry-content .wp-block-quote:not(.is-style-large) {
  border-width: 2px;
  border-color: #0073aa;
  padding-top: 0;
  padding-bottom: 0;
}

.entry .entry-content .wp-block-quote p {
  font-size: 1em;
  font-style: normal;
  line-height: 1.8;
}

.entry .entry-content .wp-block-quote cite {
  /*
			 * This requires a rem-based font size calculation instead of our normal em-based one,
			 * because the cite tag sometimes gets wrapped in a p tag. This is equivalent to $font-size_xs.
			 */
  font-size: calc(1rem / (1.25 * 1.125));
}

.entry .entry-content .wp-block-quote.is-large, .entry .entry-content .wp-block-quote.is-style-large {
  margin: 1rem 0;
  padding: 0;
  border-left: none;
}

.entry .entry-content .wp-block-quote.is-large p, .entry .entry-content .wp-block-quote.is-style-large p {
  font-size: 1.6875em;
  line-height: 1.4;
  font-style: italic;
}

.entry .entry-content .wp-block-quote.is-large cite,
.entry .entry-content .wp-block-quote.is-large footer, .entry .entry-content .wp-block-quote.is-style-large cite,
.entry .entry-content .wp-block-quote.is-style-large footer {
  /*
				 * This requires a rem-based font size calculation instead of our normal em-based one,
				 * because the cite tag sometimes gets wrapped in a p tag. This is equivalent to $font-size_xs.
				 */
  font-size: calc(1rem / (1.25 * 1.125));
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-quote.is-large, .entry .entry-content .wp-block-quote.is-style-large {
    margin: 1rem 0;
    padding: 1rem 0;
  }
  .entry .entry-content .wp-block-quote.is-large p, .entry .entry-content .wp-block-quote.is-style-large p {
    font-size: 1.6875em;
  }
}

.entry .entry-content .wp-block-image {
  max-width: 100%;
}

.entry .entry-content .wp-block-image img {
  display: block;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-image .aligncenter {
    max-width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content .wp-block-image .aligncenter {
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-image .aligncenter {
    margin: 0;
    width: calc(8 * (100vw / 12) - 28px);
  }
  .entry .entry-content .wp-block-image .aligncenter img {
    margin: 0 auto;
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content .wp-block-image .aligncenter {
    width: calc(6 * (100vw / 12) - 28px);
  }
  .entry .entry-content .wp-block-image .aligncenter img {
    margin: 0 auto;
  }
}

.entry .entry-content .wp-block-image.alignfull img {
  width: 100vw;
  max-width: calc( 100% + (2 * 1rem));
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-image.alignfull img {
    max-width: calc( 125% + 150px);
    margin-left: auto;
    margin-right: auto;
  }
}

.entry .entry-content .wp-block-cover-image,
.entry .entry-content .wp-block-cover {
  position: relative;
  min-height: 430px;
  padding: 1rem;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-cover-image,
  .entry .entry-content .wp-block-cover {
    padding: 1rem 10%;
  }
}

.entry .entry-content .wp-block-cover-image .wp-block-cover-image-text,
.entry .entry-content .wp-block-cover-image .wp-block-cover-text,
.entry .entry-content .wp-block-cover-image h2,
.entry .entry-content .wp-block-cover .wp-block-cover-image-text,
.entry .entry-content .wp-block-cover .wp-block-cover-text,
.entry .entry-content .wp-block-cover h2 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 1.6875em;
  font-weight: bold;
  line-height: 1.25;
  padding: 0;
  color: #fff;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-cover-image .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover-image .wp-block-cover-text,
  .entry .entry-content .wp-block-cover-image h2,
  .entry .entry-content .wp-block-cover .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover .wp-block-cover-text,
  .entry .entry-content .wp-block-cover h2 {
    font-size: 2.25em;
    max-width: 100%;
  }
}

.entry .entry-content .wp-block-cover-image.alignleft, .entry .entry-content .wp-block-cover-image.alignright,
.entry .entry-content .wp-block-cover.alignleft,
.entry .entry-content .wp-block-cover.alignright {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-cover-image.alignleft, .entry .entry-content .wp-block-cover-image.alignright,
  .entry .entry-content .wp-block-cover.alignleft,
  .entry .entry-content .wp-block-cover.alignright {
    padding: 1rem calc(2 * 1rem);
  }
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-cover-image.alignfull .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover-image.alignfull .wp-block-cover-text,
  .entry .entry-content .wp-block-cover-image.alignfull h2,
  .entry .entry-content .wp-block-cover.alignfull .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover.alignfull .wp-block-cover-text,
  .entry .entry-content .wp-block-cover.alignfull h2 {
    max-width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content .wp-block-cover-image.alignfull .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover-image.alignfull .wp-block-cover-text,
  .entry .entry-content .wp-block-cover-image.alignfull h2,
  .entry .entry-content .wp-block-cover.alignfull .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover.alignfull .wp-block-cover-text,
  .entry .entry-content .wp-block-cover.alignfull h2 {
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-cover-image.alignfull,
  .entry .entry-content .wp-block-cover.alignfull {
    padding-left: calc(10% + 58px + (2 * 1rem));
    padding-right: calc(10% + 58px + (2 * 1rem));
  }
  .entry .entry-content .wp-block-cover-image.alignfull .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover-image.alignfull .wp-block-cover-text,
  .entry .entry-content .wp-block-cover-image.alignfull h2,
  .entry .entry-content .wp-block-cover.alignfull .wp-block-cover-image-text,
  .entry .entry-content .wp-block-cover.alignfull .wp-block-cover-text,
  .entry .entry-content .wp-block-cover.alignfull h2 {
    padding: 0;
  }
}

.entry .entry-content .wp-block-gallery {
  list-style-type: none;
  padding-left: 0;
}

.entry .entry-content .wp-block-gallery .blocks-gallery-image:last-child,
.entry .entry-content .wp-block-gallery .blocks-gallery-item:last-child {
  margin-bottom: 16px;
}

.entry .entry-content .wp-block-gallery figcaption a {
  color: #fff;
}

.entry .entry-content .wp-block-audio figcaption,
.entry .entry-content .wp-block-video figcaption,
.entry .entry-content .wp-block-image figcaption,
.entry .entry-content .wp-block-gallery .blocks-gallery-image figcaption,
.entry .entry-content .wp-block-gallery .blocks-gallery-item figcaption {
  font-size: 0.71111em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0.5rem;
  text-align: center;
}

.entry .entry-content .wp-block-separator,
.entry .entry-content hr {
  background-color: #767676;
  border: 0;
  height: 2px;
  margin-bottom: 2rem;
  margin-top: 2rem;
  max-width: 2.25em;
  text-align: left;
  /* Remove duplicate rule-line when a separator
		 * is followed by an H1, or H2 */
}

.entry .entry-content .wp-block-separator.is-style-wide,
.entry .entry-content hr.is-style-wide {
  max-width: 100%;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-separator.is-style-wide,
  .entry .entry-content hr.is-style-wide {
    max-width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content .wp-block-separator.is-style-wide,
  .entry .entry-content hr.is-style-wide {
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

.entry .entry-content .wp-block-separator.is-style-dots,
.entry .entry-content hr.is-style-dots {
  max-width: 100%;
  background-color: inherit;
  border: inherit;
  height: inherit;
  text-align: center;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-separator.is-style-dots,
  .entry .entry-content hr.is-style-dots {
    max-width: calc(8 * (100vw / 12) - 28px);
  }
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content .wp-block-separator.is-style-dots,
  .entry .entry-content hr.is-style-dots {
    max-width: calc(6 * (100vw / 12) - 28px);
  }
}

.entry .entry-content .wp-block-separator.is-style-dots:before,
.entry .entry-content hr.is-style-dots:before {
  color: #767676;
  font-size: 1.6875em;
  letter-spacing: 0.88889em;
  padding-left: 0.88889em;
}

.entry .entry-content .wp-block-separator + h1:before,
.entry .entry-content .wp-block-separator + h2:before,
.entry .entry-content hr + h1:before,
.entry .entry-content hr + h2:before {
  display: none;
}

.entry .entry-content .wp-block-embed-twitter {
  word-break: break-word;
}

.entry .entry-content .wp-block-table th,
.entry .entry-content .wp-block-table td {
  border-color: #767676;
}

.entry .entry-content .wp-block-file {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.entry .entry-content .wp-block-file .wp-block-file__button {
  display: table;
  transition: background 150ms ease-in-out;
  border: none;
  border-radius: 5px;
  background: #0073aa;
  font-size: 22px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.2;
  text-decoration: none;
  font-weight: bold;
  padding: 0.75rem 1rem;
  color: #fff;
  margin-left: 0;
  margin-top: calc(0.75 * 1rem);
}

@media only screen and (min-width: 1168px) {
  .entry .entry-content .wp-block-file .wp-block-file__button {
    font-size: 22px;
    padding: 0.875rem 1.5rem;
  }
}

.entry .entry-content .wp-block-file .wp-block-file__button:hover {
  background: #111;
  cursor: pointer;
}

.entry .entry-content .wp-block-file .wp-block-file__button:focus {
  background: #111;
  outline: thin dotted;
  outline-offset: -4px;
}

.entry .entry-content .wp-block-code {
  border-radius: 0;
}

.entry .entry-content .wp-block-code code {
  font-size: 1em;
  white-space: pre-wrap;
  word-break: break-word;
}

.entry .entry-content .wp-block-columns .wp-block-column > *:first-child {
  margin-top: 0;
}

.entry .entry-content .wp-block-columns .wp-block-column > *:last-child {
  margin-bottom: 0;
}

@media only screen and (min-width: 768px) {
  .entry .entry-content .wp-block-columns {
    flex-wrap: nowrap;
  }
  .entry .entry-content .wp-block-columns .wp-block-column:not(:first-child) {
    margin-left: 32px;
  }
}

.entry .entry-content .wp-block-latest-comments .wp-block-latest-comments__comment-meta {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
}

.entry .entry-content .wp-block-latest-comments .wp-block-latest-comments__comment-meta .wp-block-latest-comments__comment-date {
  font-weight: normal;
}

.entry .entry-content .wp-block-latest-comments .wp-block-latest-comments__comment,
.entry .entry-content .wp-block-latest-comments .wp-block-latest-comments__comment-date,
.entry .entry-content .wp-block-latest-comments .wp-block-latest-comments__comment-excerpt p {
  font-size: inherit;
}

.entry .entry-content .wp-block-latest-comments.has-dates .wp-block-latest-comments__comment-date {
  font-size: 0.71111em;
}

.entry .entry-content .has-small-font-size {
  font-size: 0.88889em;
}

.entry .entry-content .has-normal-font-size {
  font-size: 1.125em;
}

.entry .entry-content .has-large-font-size {
  font-size: 1.6875em;
}

.entry .entry-content .has-huge-font-size {
  font-size: 2.25em;
}

.entry .entry-content .has-primary-background-color,
.entry .entry-content .has-secondary-background-color,
.entry .entry-content .has-dark-gray-background-color,
.entry .entry-content .has-light-gray-background-color {
  color: #fff;
}

.entry .entry-content .has-primary-background-color > p,
.entry .entry-content .has-primary-background-color > h1,
.entry .entry-content .has-primary-background-color > h2,
.entry .entry-content .has-primary-background-color > h3,
.entry .entry-content .has-primary-background-color > h4,
.entry .entry-content .has-primary-background-color > h5,
.entry .entry-content .has-primary-background-color > h6,
.entry .entry-content .has-primary-background-color > a,
.entry .entry-content .has-secondary-background-color > p,
.entry .entry-content .has-secondary-background-color > h1,
.entry .entry-content .has-secondary-background-color > h2,
.entry .entry-content .has-secondary-background-color > h3,
.entry .entry-content .has-secondary-background-color > h4,
.entry .entry-content .has-secondary-background-color > h5,
.entry .entry-content .has-secondary-background-color > h6,
.entry .entry-content .has-secondary-background-color > a,
.entry .entry-content .has-dark-gray-background-color > p,
.entry .entry-content .has-dark-gray-background-color > h1,
.entry .entry-content .has-dark-gray-background-color > h2,
.entry .entry-content .has-dark-gray-background-color > h3,
.entry .entry-content .has-dark-gray-background-color > h4,
.entry .entry-content .has-dark-gray-background-color > h5,
.entry .entry-content .has-dark-gray-background-color > h6,
.entry .entry-content .has-dark-gray-background-color > a,
.entry .entry-content .has-light-gray-background-color > p,
.entry .entry-content .has-light-gray-background-color > h1,
.entry .entry-content .has-light-gray-background-color > h2,
.entry .entry-content .has-light-gray-background-color > h3,
.entry .entry-content .has-light-gray-background-color > h4,
.entry .entry-content .has-light-gray-background-color > h5,
.entry .entry-content .has-light-gray-background-color > h6,
.entry .entry-content .has-light-gray-background-color > a {
  color: #fff;
}

.entry .entry-content .has-white-background-color {
  color: #111;
}

.entry .entry-content .has-white-background-color > p,
.entry .entry-content .has-white-background-color > h1,
.entry .entry-content .has-white-background-color > h2,
.entry .entry-content .has-white-background-color > h3,
.entry .entry-content .has-white-background-color > h4,
.entry .entry-content .has-white-background-color > h5,
.entry .entry-content .has-white-background-color > h6,
.entry .entry-content .has-white-background-color > a {
  color: #111;
}

.entry .entry-content .has-primary-background-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color.has-primary-background-color {
  background-color: #0073aa;
}

.entry .entry-content .has-secondary-background-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color.has-secondary-background-color {
  background-color: #005177;
}

.entry .entry-content .has-dark-gray-background-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color.has-dark-gray-background-color {
  background-color: #111;
}

.entry .entry-content .has-light-gray-background-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color.has-light-gray-background-color {
  background-color: #767676;
}

.entry .entry-content .has-white-background-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color.has-white-background-color {
  background-color: #FFF;
}

.entry .entry-content .has-primary-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-primary-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-primary-color > p {
  color: #0073aa;
}

.entry .entry-content .has-secondary-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-secondary-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-secondary-color > p {
  color: #005177;
}

.entry .entry-content .has-dark-gray-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-dark-gray-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-dark-gray-color > p {
  color: #111;
}

.entry .entry-content .has-light-gray-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-light-gray-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-light-gray-color > p {
  color: #767676;
}

.entry .entry-content .has-white-color,
.entry .entry-content .wp-block-pullquote.is-style-solid-color blockquote.has-white-color {
  color: #FFF;
}

/* Media */
.page-content .wp-smiley,
.entry-content .wp-smiley,
.comment-content .wp-smiley {
  border: none;
  margin-bottom: 0;
  margin-top: 0;
  padding: 0;
}

embed,
iframe,
object {
  max-width: 100%;
}

.custom-logo-link {
  display: inline-block;
}

.avatar {
  border-radius: 100%;
  display: block;
  height: calc(2.25 * 1rem);
  min-height: inherit;
  width: calc(2.25 * 1rem);
}

svg {
  transition: fill 120ms ease-in-out;
  fill: currentColor;
}

/*--------------------------------------------------------------
## Captions
--------------------------------------------------------------*/
.wp-caption {
  margin-bottom: calc(1.5 * 1rem);
}

@media only screen and (min-width: 768px) {
  .wp-caption.aligncenter {
    position: relative;
    left: calc( calc(8 * (100vw / 12) - 28px) / 2);
    transform: translateX(-50%);
  }
}

@media only screen and (min-width: 1168px) {
  .wp-caption.aligncenter {
    left: calc( calc(6 * (100vw / 12) - 28px) / 2);
  }
}

.wp-caption img[class*="wp-image-"] {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.wp-caption-text {
  color: #767676;
  font-size: 0.71111em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0.5rem;
  text-align: center;
}
`