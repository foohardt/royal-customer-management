import React from 'react';

class Edit extends React.Component {
  constructor(props) {
    super(props)


    this.getCustomer = this.getCustomer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async getCustomer() {
    const id = this.props.id;

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
    })
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

    const url = `http://localhost:3030/api/kunden/${id}`;
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    });
  }

  componentDidMount() {
    this.getCustomer();
  }

  render() {
    return (
      <div className='container'>
        <h1>Bearbeiten</h1>
        {this.renderForm()}
      </div>
    );
  }

  renderForm() {
    if (!this.state) {
      return;
    }

    const state = this.state;
    console.log("CT", state)
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-row'>
          <div className='form-group col-md-5'>
            <label htmlFor='nameFirst'>Vorname</label>
            <input
              type='text'
              className='form-control'
              id='nameFirst'
              value={state.nameFirst}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group col-md-5'>
            <label htmlFor='nameLast'>Nachname</label>
            <input
              type='text'
              className='form-control'
              id='nameLast'
              value={state.nameLast}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group col-md-2'>
            <label htmlFor='sex'>Geschlecht</label>
            <select id='sex' className='form-control'>
              <option select={true}>Bitte wählen</option>
              <option value={1}>Weiblich</option>
              <option value={2}>Männlich</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className='form-group col-md-10'>
            <label htmlFor='street'>Straße</label>
            <input
              type='text'
              className='form-control'
              id='street'
              value={state.street}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group col-md-2'>
            <label htmlFor='number'>Hausnummer</label>
            <input
              type='number'
              className='form-control'
              id='number'
              value={state.number}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='city'>Stadt</label>
            <input
              type='text'
              className='form-control'
              id='city'
              value={state.city}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group col-md-2'>
            <label htmlFor='zipcode'>Postleitzahl</label>
            <input
              type='number'
              className='form-control'
              id='zipcode'
              value={state.zipcode}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>Absenden</button>
      </form>
    );
  }
}

export default Edit;