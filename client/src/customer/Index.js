import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Create from './Create';
import Detail from './Detail';
import Edit from './Edit';
import List from './List';

class CustomerIndex extends React.Component {
  constructor(props) {
    super(props)

    this.renderDetail = this.renderDetail.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
  }

  render() {
         //   <Route path='/kunden/:id' render={(props) => this.renderDetail(props)} />
    return (
      <Switch>
        <Route exact path='/bearbeiten/:id' render={(props) => this.renderEdit(props)} />
        <Route exact path='/bearbeiten' render={this.renderCreate} />
        <Route component={List} />
      </Switch>
    );
  }

  renderCreate() {
    console.log("renderCreate")
    return (
      <Create />
    );
  }

  renderDetail(props) {
    const id = props.match.params.id;

    return (
      <Detail
        id={id}
      />
    );
  }

  renderEdit(props) {
    const id = props.match.params.id;

    return (
      <Edit
        id={id}
      />
    );
  }
}

export default CustomerIndex;
