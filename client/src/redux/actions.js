import axios from 'axios'
import constants from './constants'

const {GET_USERS, GET_USER, NEW_USER, EDIT_USER, DELETE_USER} = constants;
const BASE_PATH = '/api/users';

const actions = {
  getUsers(){
    const promise = axios.get(BASE_PATH);
    return {
      type: GET_USERS,
      payload: promise
    };
  },
  getUser(id){
    const promise = axios.get(`${BASE_PATH}/${id}`);
    return {
      type: GET_USER,
      payload: promise
    }
  },
  newUser(user){
    const promise = axios.post(BASE_PATH, {user});
    return {
      type: NEW_USER,
      payload: promise
    }
  },
  deleteUser(id){
    const promise = axios.delete(`${BASE_PATH}/${id}`);
    return {
      type: DELETE_USER,
      payload: promise
    }
  },
  editUser(id, user){
    const promise = axios.put(`${BASE_PATH}/${id}`, {user});
    return {
      type: EDIT_USER,
      payload: promise
    }
  }
};

export default actions