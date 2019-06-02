import React from 'react'
import { Container, Row, Col } from 'Components'
import { useTheme } from 'Hooks'

const Home = () => {
  const {changeTheme} = useTheme()
  const handleChangeTheme = () =>
    changeTheme()
  
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col md={ 4 } sm={ 6 }>
              <div>
                <button onClick={ handleChangeTheme }>click</button>
              </div>
            </Col>
            <Col md={ 4 } sm={ 6 }>
              <div>adsf</div>
            </Col>
            <Col md={ 4 } sm={ 6 }>
              <div>adsf</div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home