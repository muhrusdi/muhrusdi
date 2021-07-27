import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { formatDate } from "utils"
import { ArticleStyled } from "components/utils"

const ImageStyled = styled(GatsbyImage)`
  height: 200px;
  @media (min-width: 640px) {
    height: 500px;
  }
`

export const Header: React.FC = ({title, featuredImage, date}) => (
  <header className="text-center mt-12">
    <div>
      <h1 className="text-4xl sm:text-5xl font-black leading-tight sm:leading-12">{title}</h1>
      <ul className="mt-10">
        <li>
          <span className="text-blueGray-400">{formatDate(date, "EEEE, dd MMM yyyy")}</span>
        </li>
      </ul>
      <ImageStyled className="object-cover rounded-lg mt-14 w-full" image={getImage(featuredImage)} alt=""/>
    </div>
  </header>
)

const DetailBlog: React.FC = () => {
  return (
    <div>
      <Header/>
      <div className="sm:pr-6 sm:pl-6 mx-auto max-w-2xl mt-14">
        <ArticleStyled className="prose prose-xl">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsum perspiciatis dicta, obcaecati, suscipit voluptatum voluptates sed ipsa saepe fugit quas beatae temporibus, atque voluptas pariatur dolore facere odit eos.</p>
        </ArticleStyled>
      </div>
    </div>
  )
}

export default DetailBlog