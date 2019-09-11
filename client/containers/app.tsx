import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        {"Hello world!"}
      </div>
    );
  }
}

function mapStateToProps({ deckState }) {
  return { deckState }
}

export default connect(mapStateToProps)(App);
