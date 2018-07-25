import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import AppLayout from './components/AppLayout';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AppLayout />
        </Router>
      </Provider>
    );
  }
}

export default App;
