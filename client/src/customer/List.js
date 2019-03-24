import { Link } from 'react-router-dom';
import React from 'react';

import FetchError from '../shared/FetchError';
import SearchInput from '../shared/SearchInput';
import TaskPanel from '../shared/TaskPanel';

class CustomerList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isError: false,
      list: [],
      query: '',
    }

    this.refresh = this.refresh.bind(this);
    this.setQuery = this.setQuery.bind(this);
  }

  async refresh() {
    const query = this.state.query;

    try {
      const response = await fetch(`http://localhost:3030/api/kunden?nachname=${query}`)
      const list = await response.json()

      if (!list) {
        console.log('!list', list)
        return;
      }

      this.setState({
        list,
      });

    } catch {
      this.setState({
        isError: true,
      });
    }
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
        <div className='page-header'>
          <h1>Royal Customer Management</h1>
        </div>

        <TaskPanel>
          <Link
            className='btn btn-primary'
            to='/bearbeiten'
          >
            Kunden anlegen
          </Link>
        </TaskPanel>
        <SearchInput
          onChange={this.setQuery}
          onSearch={this.refresh}
          query={state.query}
        />
        {state.isError ? <FetchError /> : this.renderList()}
      </div>
    );
  }

  renderList() {
    const list = this.state.list;

    if (!list[0]) {
      return (
        <div className='alert alert-info text-center' role='alert'>
          Zu dem angegebenen Suchbgeriff konnte kein Ergebnis gefunden werden. Bitte beachten Sie Groß- und Kleinschreibung.
          Oder führen sie eine leere Suche aus um eine Liste aller Ergebnisse zu erhalten.
      </div>
      )
    }

    const mappedList = list.map((x, i) =>
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