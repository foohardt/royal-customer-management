import React from 'react';
import { Link } from 'react-router-dom';

class CustomerForm extends React.PureComponent {
  render() {
    const props = this.props;

    return (
      <form onSubmit={props.handleSubmit} >
        <div className='form-row'>
          <div className='form-group col-md-5'>
            <label htmlFor='nameFirst'>Vorname</label>
            <input
              type='text'
              className='form-control'
              id='nameFirst'
              value={props.nameFirst}
              onChange={props.handleChange}
              required={true}
            />
          </div>
          <div className='form-group col-md-5'>
            <label htmlFor='nameLast'>Nachname</label>
            <input
              type='text'
              className='form-control'
              id='nameLast'
              value={props.nameLast}
              onChange={props.handleChange}
              required={true}
            />
          </div>
          <div className='form-group col-md-2'>
            <label htmlFor='sex'>Geschlecht</label>
            <select
              id='sex'
              className='form-control'
              value={props.sex}
              onChange={props.handleChange}
              required={true}
            >
              <option value=''>Bitte wählen..</option>
              <option value={1}>Weiblich</option>
              <option value={2}>Männlich</option>
            </select>
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-10'>
            <label htmlFor='street'>Straße</label>
            <input
              type='text'
              className='form-control'
              id='street'
              value={props.street}
              onChange={props.handleChange}
              required={true}
            />
          </div>
          <div className='form-group col-md-2'>
            <label htmlFor='number'>Hausnummer</label>
            <input
              type='number'
              className='form-control'
              id='number'
              value={props.number}
              onChange={props.handleChange}
              required={true}
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
              value={props.city}
              onChange={props.handleChange}
              required={true}
            />
          </div>
          <div className='form-group col-md-2'>
            <label htmlFor='zipcode'>Postleitzahl</label>
            <input
              type='number'
              className='form-control'
              id='zipcode'
              value={props.zipcode}
              onChange={props.handleChange}
              required={true}
            />
          </div>
        </div>
        <button 
          type='submit' 
          className='btn btn-primary mr-2'
        >Übernehmen
        </button>
        <Link 
          to='/'
          className='btn btn-secondary mr-2'>
          Abbrechen
        </Link>
        {this.renderDeleteButton()}
      </form>
    );
  }

  renderDeleteButton() {
    const id = this.props.id;
    
    if (!id) {
      return;
    }

    return (
      <button
        className='btn btn-danger mr-2'
        onClick={this.props.handleDelete}
      >
        Kundendaten löschen
      </button>
    )
  }
}

export default CustomerForm;