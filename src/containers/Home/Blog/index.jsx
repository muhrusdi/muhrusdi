import React from 'react'
import styled from '@emotion/styled'
import { Typography } from 'reus'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 400px);
    grid-gap: 2px;
    & > div {
      background: #f1f1f1;
      &:first-of-type {
        grid-column-start: ${({reverse}) => reverse ? 3 : 1};
        grid-column-end: ${({reverse}) => reverse ? 4 : 2};
        grid-row-start: 1;
        grid-row-end: 2;
        background: #fff;
        align-self: center;
        justify-self: center;
      }
      &:nth-of-type(2) {
        grid-column-start: ${({reverse}) => reverse ? 1 : 2};
        grid-column-end: ${({reverse}) => reverse ? 3 : 4};
        grid-row-start: 1;
        grid-row-end: 3;
      }
    }
  
`

const Section = styled.section`
  margin-bottom: 80px;
`

const Blog = () => {
  return (
    <>
      <Section>
        <Grid>
          <div>
            <Typography
              tag="h2"
              type="eyebrow-product-elevated"
            >
              Blogs
            </Typography>
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
        </Grid>
      </Section>
      <Section>
        <Grid reverse>
          <div>
            <Typography
              tag="h2"
              type="eyebrow-product-elevated"
            >
              Works
            </Typography>
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
        </Grid>
      </Section>
    </>
  )
}

export default Blog