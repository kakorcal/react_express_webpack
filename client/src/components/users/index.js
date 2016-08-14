import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import actions from '../../redux/actions'

class UserIndex extends Component{
  componentDidMount(){
    this.props.actions.getUsers();
  }
  render(){
    const users = this.props.users.map((user, idx)=>{
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

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);