import React from "react"
import { Global, css } from "@emotion/core"

const GlobalStyles = () => (
  <Global
    styles={theme => css`
      @import url("https://rsms.me/inter/inter.css");

      @supports (font-variation-settings: normal) {
        html {
          font-family: "Inter var", sans-serif;
        }
      }

      html {
        font-family: "Inter", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        quotes: "â€œ" "â€";
      }

      html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        overscroll-behavior-y: none;
      }

      ul,
      ol,
      li,
      dl,
      dt,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hgroup,
      p,
      blockquote,
      figure,
      form,
      fieldset,
      input,
      legend,
      pre,
      abbr,
      button {
        margin: 0;
        padding: 0;
      }

      pre,
      code,
      address,
      caption,
      th,
      figcaption {
        font-size: 1em;
        font-weight: normal;
        font-style: normal;
      }

      fieldset,
      iframe,
      img {
        border: 0;
      }

      caption,
      th {
        text-align: left;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      article,
      aside,
      footer,
      header,
      nav,
      main,
      section,
      summary,
      details,
      hgroup,
      figure,
      figcaption {
        display: block;
      }

      audio,
      canvas,
      video,
      progress {
        display: inline-block;
        vertical-align: baseline;
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
        vertical-align: inherit;
      }

      body {
        font-size: 14px;
        background: ${ theme.background };
        line-height: 1.47059;
        font-weight: 400;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI,
          Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
          Segoe UI Symbol;
        color: ${ theme.color };
      }

      body,
      input,
      textarea,
      select,
      button {
        font-synthesis: none;
        -moz-font-feature-settings: "kern";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        direction: ltr;
        text-align: left;
      }

      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus textarea:-webkit-autofill,
      textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
      select:-webkit-autofill,
      select:-webkit-autofill:hover,
      select:-webkit-autofill:focus {
        border: 2px solid #029fe2;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset;
        transition: background-color 5000s ease-in-out 0s;
      }
    `}
  />
)

export default GlobalStyles
