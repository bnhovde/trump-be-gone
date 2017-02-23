import React, { PropTypes } from 'react';

import Container from '../../components/Container';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test',
    };
  }

  render() {
    return (
      <div>
        <p>HI!!</p>
        <Container padding={['top', 'bottom']}>
          <p>Container contents</p>
        </Container>
      </div>
    );
  }
}

export default App;
