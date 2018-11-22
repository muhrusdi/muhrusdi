import React from 'react'
import { css } from 'emotion'
import { Container } from 'reus'
import imgReact from '../../images/react.png'

const Detail = () => {
  const Skills = () => (
    <ul>
      <li>
        <img src={imgReact}/>
      </li>
    </ul>
  )

  return (
    <div className={ css`
      padding: 70px 0;  
   ` }>
      <Container sm>
        <div className={css`
          text-align: center;
        `}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sequi ut sapiente nemo eius, rem animi voluptatibus architecto iusto id exercitationem beatae natus dignissimos asperiores veniam earum quaerat magni praesentium?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sequi ut sapiente nemo eius, rem animi voluptatibus architecto iusto id exercitationem beatae natus dignissimos asperiores veniam earum quaerat magni praesentium?</p>
        </div>
      </Container>
      <div>
        <Skills/>
      </div>
    </div>
  )
}

export default Detail