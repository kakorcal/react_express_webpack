import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import actions from '../../redux/actions'

class UserShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount(){
    this.props.actions.getUser(this.props.params.user_id);
  }

  handleDelete(e){
    this.props.actions.deleteUser(this.props.params.user_id).then(()=>{
      this.context.router.push('/');
    });
  }

  render(){
    if(!this.props.users[0].robots){
      return <div></div>; 
    }

    const robots = this.props.users[0].robots.map((robot, idx)=>{
      return (
        <li key={idx}>
          <img src={robot.url} alt='robot'/>
          <p>{robot.id}. <Link to={`/users/${robot.user_id}/robots/${robot.id}`}>{robot.name}</Link></p>
        </li>
      );
    });

    return (
      <div>
        <div>
          <h1>User Show Component</h1>
          <button><Link to={`/users/${this.props.params.user_id}/edit`}>Edit</Link></button>
          <button><Link to='/users'>Go Back</Link></button>
          <button onClick={this.handleDelete.bind(this)}>Delete</button>
        </div>
        <div>
          <ul>{robots}</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);