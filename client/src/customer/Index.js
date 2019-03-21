import React from 'react';
import { Route, Switch} from 'react-router-dom'

import List from './List';

class CustomerIndex extends React.Component {
  render() {
    return (
      <Switch>
        {/* <Route path="/kunden/:id/edit" render={this.renderNNN} */}
        <Route component={List} />
      </Switch>
    );  
  }
}

export default CustomerIndex;
 