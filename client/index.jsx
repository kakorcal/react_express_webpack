import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render(){
    return (
      <div>
        <h1>React Address Book</h1>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('root'));