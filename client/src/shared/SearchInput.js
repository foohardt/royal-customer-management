import React from 'react';

class SearchInput extends React.PureComponent {
  constructor(props) {
    super(props)

    this.triggerSearch = this.triggerSearch.bind(this);
  }

  triggerSearch() {
    this.props.onSearch();
  }

  render() {
    return (
      <div className='input-group from-group mb-3'>
        <input
          className='form-control'
          type='search'
          placeholder='Nach Nachname suchen'
          onChange={(e) => this.props.onChange(e)}
          />
        <button
          className='btn btn-primary'
          onClick={this.triggerSearch}
        >
          Suche
        </button>
      </div>
    );
  }
}

export default SearchInput;