import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class UserIndex extends Component{
  constructor(props){
    super(props);
    this.state = {users: []};
  }
  componentWillMount(){
    
  }
  render(){
    const users = this.state.users.map((user, idx)=>{
      return (
        <li key={idx}>
          <p>{user.id}. <Link to={`/users/${user.id}`}>{user.first_name} {user.last_name}</Link></p>
        </li>
      );
    });

    return (
      <div>
        <div>
          <h1>User Index Component</h1>
          <button><Link to='/users/new'>Add New User</Link></button>
        </div>
        <div>
          <ul>{users}</ul>
        </div>
      </div>
    );
  }
}

export default connect((state)=>state)(UserIndex);