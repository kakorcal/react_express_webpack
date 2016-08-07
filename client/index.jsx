import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import App from './routes';
require('./base.scss');

const PATH = 'http://localhost:3000/api/users';

// const App = React.createClass({
//   getInitialState(){
//     console.log('GET INITIAL STATE');
//     return {
//       users: 'Loading...'
//     };
//   },
//   getDefaultProps(){
//     console.log('GET DEFAULT PROPS');
//     return {};
//   },
//   componentWillMount(){
//     console.log('COMPONENT WILL MOUNT');
//   },
//   componentDidMount(){
//     console.log('COMPONENT DID MOUNT');
//     axios.get(PATH).then(({data})=>{
//       this.setState({users: JSON.stringify(data)});
//     });
//   },
//   componentWillUnmount(){
//     console.log('COMPONENT WILL UNMOUNT');
//   },
//   componentWillReceiveProps(nextProps){
//     console.log('COMPONENT WILL RECEIVE PROPS');
//   },
//   shouldComponentUpdate(nextProps, nextState){
//     console.log('SHOULD COMPONENT UPDATE');
//     return true;
//   },
//   componentWillUpdate(nextProps, nextState){
//     console.log('COMPONENT WILL UPDATE')
//   },
//   componentDidUpdate(prevProps, prevState){
//     console.log('COMPONENT DID UPDATE');
//   },
//   render(){
//     console.log('RENDER');
//     return (
//       <div>
//         {this.state.users}
//       </div>
//     );
//   }
// });


ReactDOM.render(<App/>, document.getElementById('root'));