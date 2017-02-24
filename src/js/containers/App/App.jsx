import React, { PropTypes } from 'react';
import 'sanitize.css/sanitize.css';

// Helpers
import { saveState } from '../../helpers/storage';
import { enableBadge, disableBadge } from '../../helpers/badge';

import Container from '../../components/Container';
import Checkbox from '../../components/Checkbox';

import styles from './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: props.initialState.isEnabled,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEnabled = this.toggleEnabled.bind(this);
    this.persistState = this.persistState.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('test');
  }

  toggleEnabled() {
    this.setState({
      isEnabled: !this.state.isEnabled,
    }, () => {
      // Update icon
      this.persistState();
    });
  }

  persistState() {
    // Set correct badge
    if (this.state.isEnabled) {
      enableBadge();
    } else {
      disableBadge();
    }
    // Save settings for persistance
    saveState(this.state);
  }

  render() {
    const {
      isEnabled,
    } = this.state;

    return (
      <div>
        <Container padding={['top']}>
          <h1>Hi there!</h1>
        </Container>

        <Container padding={['top']}>
          <p>Welcome</p>
        </Container>

        <Container padding={['top']}>
          <p>Settings:</p>
        </Container>

        <Container padding={['top', 'bottom']}>
          <form onSubmit={this.handleSubmit}>
            <Checkbox
              value="Plugin enabled"
              checked={isEnabled}
              onChange={this.toggleEnabled}
              name="Plugin enabled"
            />
          </form>
        </Container>
      </div>
    );
  }
}

export default App;
