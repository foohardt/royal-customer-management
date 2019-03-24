import React from 'react';

class FetchError extends React.PureComponent {
  render() {
    return (
      <div class="alert alert-danger" role="alert">
        Ein Fehler ist aufgetreten. Bitte laden Sie die Seite neu oder wenden Sie sich an Support.
      </div>
    );
  }
}

export default FetchError;