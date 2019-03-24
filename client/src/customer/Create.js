import React from 'react';
import { Redirect } from 'react-router-dom';

import FetchError from '../shared/FetchError';
import Form from '../shared/Form';

class Create extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sex: 0,
      nameFirst: '',
      nameLast: '',
      street: '',
      number: '',
      city: '',
      zipcode: '',

      isError: false,
      isSaved: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    let value = {}
    value[e.target.id] = e.target.value;

    this.setState(value);
  }

  async handleSubmit(e) {
    e.preventDefault();

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
      const url = `http://localhost:3030/api/kunden/`;
      await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
      });

      this.setState({
        isSaved: true,
      })

    } catch {
      this.setState({
        isError: true,
      });
    }
  }

  redirect() {
    const isSaved = this.state.isSaved;

    if (isSaved) {
      return (
        <Redirect to='/' />
      );
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h1>Kunden anlegen</h1>
        </div>
        {this.state.isError ? <FetchError /> : this.renderForm()}
      </div>
    );
  }

  renderForm() {
    const state = this.state;

    return (
      <React.Fragment>
        {this.redirect()}
        <Form
          nameFirst={state.nameFirst}
          nameLast={state.nameLast}
          sex={state.sex}
          street={state.street}
          number={state.number}
          city={state.city}
          zipcode={state.zipcode}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>


    );
  }
}

export default Create;