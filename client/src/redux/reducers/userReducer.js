import constants from '../constants'
const {GET_USERS, GET_USER, NEW_USER, EDIT_USER, DELETE_USER} = constants;

export default function userReducer(users = [], action){
  switch(action.type){
    case GET_USERS: 
      return [...action.payload];
    default:
      return users;
  }
}