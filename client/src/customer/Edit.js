import React from "react";

class Edit extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <h1>EDIT Customer</h1>

        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Vorname</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Nachname</label>
              <input type="password" className="form-control" id="inputPassword4" />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Straße und Hausnummer</label>
            <input type="text" className="form-control" id="inputAddress" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">Stadt</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Postleitzahl</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Geschlecht</label>
              <select id="inputState" class="form-control">
                <option selected>Bitte wählen</option>
                <option>Männlich</option>
                <option>Weiblich</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Absenden</button>
        </form>

      </div>
    );
  }
}

export default Edit;