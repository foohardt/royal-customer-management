import React from 'react';

class SearchInput extends React.PureComponent {
  constructor(props) {
    super(props)

    this.triggerSearch = this.triggerSearch.bind(this);
  }

  triggerSearch() {
    this.props.onSearch();
  }

  handleKeyDown(e) {
    e.preventDefault()

    if (e.key !== 'Enter') {
      return;
    }
    //onKeyDown={this.handleKeyDown}
  }

  render() {
    return (
      <div className='input-group from-group'>
        <input
          className='form-control'
          type='search'
          placeholder='Nach Nachname suchen'
          onChange={(e) => this.props.onChange(e)}

        />
        <button
          className="btn btn-primary"
          onClick={this.triggerSearch}
        >
          Suche
        </button>
      </div>
    );
  }
}

export default SearchInput;