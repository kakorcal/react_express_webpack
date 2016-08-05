import React from 'react';
import ReactDOM from 'react-dom';
import './base.scss';

const App = React.createClass({
  render(){
    return (
      <div className='container'>
        <h1 id='main-title'>React Address Book</h1>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('root'));