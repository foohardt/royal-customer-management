import React from 'react';
import { Redirect } from 'react-router-dom';

import FetchError from '../shared/FetchError';
import Form from '../shared/Form';

class Edit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isDeleted: false,
      isError: false,
      isSaved: false,
    }

    this.delete = this.delete.bind(this);
    this.getCustomer = this.getCustomer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async delete() {
    const id = this.props.id;

    const url = `http://localhost:3030/api/kunden/${id}`;
    await fetch(url, {
      method: 'DELETE',
    });

    this.setState({
      isDeleted: true,
    });
  }

  async getCustomer() {
    const id = this.props.id;

    try {
      const response = await fetch(`http://localhost:3030/api/kunden/${id}`)
      const customer = await response.json();

      this.setState({
        id: customer._id,
        sex: customer.sex,
        nameFirst: customer.name.first,
        nameLast: customer.name.last,
        street: customer.adress.street,
        number: customer.adress.number,
        city: customer.adress.city,
        zipcode: customer.adress.zipcode,
      });

    } catch {
      this.setState({
        isError: true,
      });
    }
  }

  handleChange(e) {
    e.preventDefault();

    let value = {}
    value[e.target.id] = e.target.value;

    this.setState(value);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const id = this.state.id;

    const state = this.state;
    const customer = {
      name: {
        first: state.nameFirst,
        last: state.nameLast,
      },
      sex: state.sex,
      adress: {
        street: state.street,
        number: state.number,
        city: state.city,
        zipcode: state.zipcode,
      }
    };

    try {
      const url = `http://localhost:3030/api/kunden/${id}`;
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
      });

      this.setState({
        isSaved: true,
      });

    } catch {
      this.setState({
        isError: true,
      });
    }
  }

  redirect() {
    const isDeleted = this.state.isDeleted;
    const isSaved = this.state.isSaved;

    if (isDeleted || isSaved) {
      return (
        <Redirect to='/' />
      );
    }
  }

  componentDidMount() {
    this.getCustomer();
  }

  render() {
    return (
      <div className='container'>
        <div className="page-header">
          <h1>Kunden bearbeiten</h1>
        </div>
        {this.state.isError ? <FetchError />: this.renderForm()}
      </div>
    );
  }

  renderForm() {
    if (!this.state) {
      return;
    }

    const state = this.state;
    return (
      <React.Fragment>
        {this.redirect()}
        <Form
          id={state.id}
          nameFirst={state.nameFirst}
          nameLast={state.nameLast}
          sex={state.sex}
          street={state.street}
          number={state.number}
          city={state.city}
          zipcode={state.zipcode}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDelete={this.delete}
        />
      </React.Fragment>
    );
  }
}

export default Edit;
