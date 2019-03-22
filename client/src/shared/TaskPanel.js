import React from "react";

class TasksPanel extends React.PureComponent {
  panel = React.createRef();

  render() {
    return (
      <div className="card">
        <div className="card-header">Tasks</div>
        <div className="card-body" ref={this.panel}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TasksPanel;