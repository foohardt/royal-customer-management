import React from 'react';
import { Route, Switch } from 'react-router';

import CustomerIndex from './customer/Index';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.renderContent()}
      </div>
    );
  }

  renderContent() {
    return (
      <Switch>
        <Route path="/" render={this.renderCustomers} />
      </Switch>
    );
  }

  renderCustomers() {
    return (
      <CustomerIndex />
    );
  }
}

export default App;
