import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { Button, Container, Row, Col } from '../src/components'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with Banner', () => (
    <Button 
      borderRadius={ 20 }
      height={ 42 }
      minWidth={ 120 }
      fontSize={ 18 }
      onClick={action('clicked')}>
      Default
    </Button>
  ));

storiesOf('Grid', module)
  .add('Container', () => {
    return (
      <Container>
        test
      </Container>
    )
  })
  .add('Row - span', () => {
    return (
      <Container>
        <Row flow="nowrap">
          <Col>
            test
          </Col>
          <Col>
            test
          </Col>
          <Col>
            test
          </Col>
          <Col>
            test
          </Col>
        </Row>
      </Container>
    )
  })
  .add('Row - responsive', () => {
    return (
      <Container>
        <Row>
          <Col sm={ 6 } md={ 4 } lg={ 3 }>
            test
          </Col>
          <Col sm={ 6 } md={ 4 } lg={ 3 }>
            test
          </Col>
          <Col sm={ 6 } md={ 4 } lg={ 3 }>
            test
          </Col>
          <Col sm={ 6 } md={ 4 } lg={ 3 }>
            test
          </Col>
        </Row>
      </Container>
    )
  })