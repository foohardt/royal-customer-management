import React from 'react';

class TasksPanel extends React.PureComponent {
  panel = React.createRef();

  render() {
    return (
      <div className='card mb-3'>
        <div className='card-header'>Aufgaben</div>
        <div className='card-body' ref={this.panel}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TasksPanel;