import React, {Component} from 'react'
import {Link} from 'react-router'
import axios from 'axios'

export default class UserNew extends Component{
  render(){
    return (
      <div>
        <div>
          <h1>Create New User</h1>
          <button><Link to='/users'>Go Back</Link></button>
        </div>      
        <div>
          <form>
            <div> 
              <label htmlFor="first_name">First Name: </label>
              <input id='first_name' type="text"/>
            </div>
            <div>
              <label htmlFor="last_name">Last Name: </label>
              <input id='last_name' type="text"/>
            </div>
            <div>
              <label className="form-label">Gender: </label>
              <label className="form-radio">
                  <input type="radio" name="gender" checked={true}/>
                  <i className="form-icon"></i> Male
              </label>
              <label className="form-radio">
                  <input type="radio" name="gender" />
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