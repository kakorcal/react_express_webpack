import React from 'react'
import {Router, Route, Redirect, browserHistory} from 'react-router'
import App from './src/components/App'
import UserIndex from './src/components/users/index'
// import UserNew from './src/components/users/new'
// import UserShow from './src/components/users/show'
// import UserEdit from './src/components/users/edit'
// redirect issue: https://github.com/reactjs/react-router/issues/1675

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='users' component={UserIndex}/>
    </Route>
    <Redirect from='/' to='/users'/>
  </Router>
);

    // <Route path='users/new' component={UserNew}/>
// <Route path='/users/:user_id' component={UserShow}/>
// <Route path='/users/:user_id/edit' component={UserEdit}/>