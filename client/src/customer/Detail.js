import React from 'react';
import { Link } from 'react-router-dom'

import TaskPanel from '../shared/TaskPanel';

class CustomerDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      customer: {},
    }

    this.getCustomer = this.getCustomer.bind(this);
  }

  async getCustomer() {
    const id = this.props.id;

    const response = await fetch(`http://localhost:3030/api/kunden/${id}`)
    const customer = await response.json()

    this.setState({
      id: customer._id,
      sex: customer.sex,
      nameFirst: customer.name.first,
      nameLast: customer.name.last,
      street: customer.adress.street,
      number: customer.adress.number,
      city: customer.adress.city,
      zipcode: customer.adress.zipcode,
    })

  }

  componentDidMount() {
    this.getCustomer()
  }

  render() {
    const id = this.state.id;

    return (
      <div className='container'>
        <h1>Customer Detail</h1>
        <TaskPanel>
          <Link
            to={`/kunden/bearbeiten/${id}`}
            className='btn btn-primary'
          >
            Bearbeiten
          </Link>
        </TaskPanel>
        <div className='row'>
          <div className='col-md-6'>
            {this.renderName()}
          </div>
          <div className='col-md-6'>
            {this.renderAdress()}
          </div>
        </div>
      </div>
    );
  }

  renderName() {
    const state = this.state;

    return (
      <div class='card'>
        <div class='card-header'>Name</div>
        <div class='card-body'>
          <dl class='row'>
            <dt className='col-sm-3'>Vorname: </dt>
            <dd className='col-sm-9'>{state.nameFirst}</dd>
            <dt className='col-sm-3'>Nachname: </dt>
            <dd className='col-sm-9'>{state.nameLast}</dd>
            <dt className='col-sm-3'>Geschlecht: </dt>
            <dd className='col-sm-9'>{state.sex}</dd>
          </dl>
        </div>
      </div>
    );
  }

  renderAdress() {
    const state = this.state;

    return (
      <div class='card'>
        <div class='card-header'>Anschrift</div>
        <div class='card-body'>
          <dl class='row'>
            <dt className='col-sm-3'>Straße: </dt>
            <dd className='col-sm-9'>{state.street} {state.number}</dd>
            <dt className='col-sm-3'>Stadt: </dt>
            <dd className='col-sm-9'>{state.city}</dd>
            <dt className='col-sm-3'>Postleitzahl: </dt>
            <dd className='col-sm-9'>{state.zipcode}</dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default CustomerDetail;