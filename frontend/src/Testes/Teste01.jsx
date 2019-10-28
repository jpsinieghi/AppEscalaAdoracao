import React from 'react';
import ReactDOM from 'react-dom';


export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
    }
  
    updateState(who) {
      this.setState({data: `Data updated from ${who}`})
    }
  
    render() {
      return (
        <div>
          Parent: {this.state.data}
          <Child update={this.updateState}/>
        </div>
      )
    }
  }
  
  class Child extends React.Component {
    render() {
      return (
        <div>
          Child component
          <button onClick={() => this.props.update('child')}>
            CLICK
          </button>
          <GrandChild update={this.props.update}/>
        </div>
      );
    }
  }
  
  class GrandChild extends React.Component {
    render() {
      return (
        <div>
          Grand child component
          <button onClick={() => this.props.update('grand child')}>
            CLICK
          </button>
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('root'))