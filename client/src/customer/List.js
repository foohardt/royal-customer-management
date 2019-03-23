import { Link } from 'react-router-dom';
import React from 'react';

import SearchInput from '../shared/SearchInput';
import TaskPanel from '../shared/TaskPanel';

class CustomerList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
      query: '',
    }

    this.refresh = this.refresh.bind(this);
    this.setQuery = this.setQuery.bind(this);
  }

  async refresh() {
    const query = this.state.query;

    const response = await fetch(`http://localhost:3030/api/kunden?nachname=${query}`)
    const list = await response.json()

    this.setState({
      list,
    });
  }

  setQuery(e) {
    e.preventDefault();

    this.setState({
      query: e.target.value,
    });
  }

  async componentDidMount() {
    await this.refresh();
  }

  render() {
    const state = this.state;

    return (
      <div className='container'>
        <TaskPanel>
          <Link
            className='btn btn-primary'
            to='/bearbeiten'
          >
            Erstellen
          </Link>
        </TaskPanel>
        <SearchInput 
          onChange={this.setQuery}
          onSearch={this.refresh}
          query={state.query}
        />
        {this.renderList()}
      </div>
    );
  }

  renderList() {
    if (!this.state.list) {
      return;
    }

    const mappedList = this.state.list.map((x, i) =>
      <tr key={`custommer-table-row-${i}`}>
        <td>{x.name.first}</td>
        <td>{x.name.last}</td>
        <td>{x.adress.city}</td>
        <td>
          <Link
            to={`/bearbeiten/${x._id}`} 
            className='btn btn-primary'>
            Anzeigen
          </Link>
        </td>
      </tr>
    );

    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Stadt</th>
            <th>Auswahl</th>
          </tr>
        </thead>
        <tbody>
          {mappedList}
        </tbody>
      </table>
    );
  }
}

export default CustomerList;