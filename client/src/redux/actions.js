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
  }
};

export default actions