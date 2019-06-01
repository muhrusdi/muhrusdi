import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { Container, Row, Col } from '../src/components'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
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