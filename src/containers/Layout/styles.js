import { css } from '@emotion/core'

export const styles = css`
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%
}

body {
  margin: 0;
  padding: 0
}

ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,hgroup,p,blockquote,figure,form,fieldset,input,legend,pre,abbr,button {
  margin: 0;
  padding: 0
}

pre,code,address,caption,th,figcaption {
  font-size: 1em;
  font-weight: normal;
  font-style: normal
}

fieldset,iframe,img {
  border: 0
}

caption,th {
  text-align: left
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

article,aside,footer,header,nav,main,section,summary,details,hgroup,figure,figcaption {
  display: block
}

audio,canvas,video,progress {
  display: inline-block;
  vertical-align: baseline
}

button {
  background: none;
  border: 0;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: inherit;
  overflow: visible;
  vertical-align: inherit
}

button:disabled {
  cursor: default
}

:focus {
  outline: 3px solid #c1e0fe;
  outline: 3px solid rgba(131,192,253,0.5);
  outline-offset: 1px
}

:focus[data-focus-method="mouse"]:not(input):not(textarea):not(select),:focus[data-focus-method="touch"]:not(input):not(textarea):not(select) {
  outline: none
}

::-moz-focus-inner {
  border: 0;
  padding: 0
}

html {
  font-family: -apple-system, "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-size: 106.25%;
  quotes: "â€œ" "â€"
}

body {
  font-size: 17px;
  line-height: 1.47059;
  font-weight: 400;
  letter-spacing: -.022em;
  font-family: -apple-system, "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  background-color: #fff;
  color: #333;
  font-style: normal
}

body,input,textarea,select,button {
  font-synthesis: none;
  -moz-font-feature-settings: 'kern';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  direction: ltr;
  text-align: left
}

h1,h2,h3,h4,h5,h6 {
  color: #111
}

code {
  background-color: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
    "Liberation Mono", Menlo, Courier, monospace;
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}
pre code {
  background: none;
  line-height: 1.42;
}
code:before,
code:after,
tt:before,
tt:after {
  letter-spacing: -0.2em;
  content: " ";
}
pre code:before,
pre code:after,
pre tt:before,
pre tt:after {
  content: "";
}

a {
  color: #1890ff;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color .3s;
}

a:focus {
  outline: none;
}

img {
  vertical-align: middle;
  border-style: none;
}

html {
  box-sizing: border-box;
  -ms-overflow-style: scrollbar;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
`
