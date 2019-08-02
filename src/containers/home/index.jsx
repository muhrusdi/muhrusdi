import React from 'react'
import { Banner, SectionStore, SectionNews, SectionTemplate, SectionContact } from 'Components'

const Home = () => {
  
  return (
    <>
      <Banner/>
      <SectionStore/>
      <SectionNews
        title="Artikel"
        desc="Artikel seputar pengembangan web dan perkembangan teknologi"
        path="/blog"
      />
      <SectionTemplate/>
      <SectionContact/>
    </>
  )
}

export default Home