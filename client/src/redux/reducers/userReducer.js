import constants from '../constants'
const {GET_USERS, GET_USER, NEW_USER, EDIT_USER, DELETE_USER} = constants;

export default function userReducer(users = [], action){
  switch(action.type){
    case GET_USERS: 
      return action.payload.data.map(user=>user);
    case GET_USER:
      return [action.payload.data];
    case NEW_USER:
      return users.concat(action.payload.data);
    case DELETE_USER:
      return users.map(user=>user);
    case EDIT_USER:
      return [Object.assign({}, users[0], action.payload.data)];
    default:
      return users;
  }
}