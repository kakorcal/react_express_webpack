import React, {Component} from 'react'
import {Link} from 'react-router'

export default class UserIndex extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
      robots: []
    };
  }
  componentDidMount(){
    
  }
  render(){
    return (
      <div>
        <h1>I am from the user index component</h1>

      </div>
    );
  }
}