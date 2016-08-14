import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link, browserHistory} from 'react-router'
import actions from '../../redux/actions'

class UserNew extends Component{
  // static contextTypes = {
  //   router: PropTypes.object
  // };

  constructor(props){
    super(props);
    this.state = {
      gender: true
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let first_name = ReactDOM.findDOMNode(this.refs.first).value;
    let last_name = ReactDOM.findDOMNode(this.refs.last).value;
    let gender = this.state.gender ? 'Male' : 'Female';
    this.props.actions.newUser({first_name, last_name, gender}).then(()=>{
      browserHistory.push('/');
    });
  }

  handleGenderChange(e){
    this.setState({gender: !this.state.gender});
  }

  render(){
    return (
      <div>
        <div>
          <h1>Create New User</h1>
          <button><Link to='/users'>Go Back</Link></button>
        </div>      
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div> 
              <label htmlFor="first_name">First Name: </label>
              <input ref='first' id='first_name' type="text"/>
            </div>
            <div>
              <label htmlFor="last_name">Last Name: </label>
              <input ref='last' id='last_name' type="text"/>
            </div>
            <div>
              <label className="form-label">Gender: </label>
              <label className="form-radio">
                  <input type="radio" name="gender" onChange={this.handleGenderChange.bind(this)} checked={this.state.gender}/>
                  <i className="form-icon"></i> Male
              </label>
              <label className="form-radio">
                  <input type="radio" name="gender" onChange={this.handleGenderChange.bind(this)} checked={!this.state.gender}/>
                  <i className="form-icon"></i> Female
              </label>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch, action){
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNew);