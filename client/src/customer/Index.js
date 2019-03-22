import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Detail from './Detail';
import Edit from './Edit';
import List from './List';

class CustomerIndex extends React.Component {
  constructor(props) {
    super(props)

    this.renderDetail = this.renderDetail.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
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

  render() {
    return (
      <Switch>
        <Route exact path='/kunden/:id' render={(props) => this.renderDetail(props)} />
        <Route exact path='/kunden/bearbeiten/:id' render={(props) => this.renderEdit(props)} />
        <Route component={List} />
      </Switch>
    );
  }



}

export default CustomerIndex;
