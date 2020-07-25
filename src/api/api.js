import axios from 'axios'
import store from '../store'
import router from '../router/index'

const API_URL = 'http://serverpi.ddns.me/api/';
const api = () => createApiInstance();

export default {
  //--------------------------------------------------------------USER AUTH AND SESSION
  login: async (body, success, failure) => {
    try {
      const response = await api().post(API_URL + 'auth/login', body);
      success(response.data.data.token);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  },

  logout:async (success, failure) => {
    try {
      const response = await api().post(API_URL + 'auth/logout');
      success();
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  },

  register: async (body, success, failure) => {
    try {
      const response = await api().post(API_URL + 'auth/register', body);
      success(response.data);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  },
//----------------------------------------------------------------------------GETERS FROM DATABASE
  getUser: async (success, failure) => {
    try {
      const response = await api().get(API_URL + 'user');
      success(response);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(context);
    }
  },

  fetchProjects: async (success, failure) => {//nepritaikyta
    try {
      const response = await api().get(API_URL + 'products');
      success(response.data);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  }
}
//--------------------------------------------------------------------------------------------AXIOS HEADER CONFIGURATION
function createApiInstance() {
    
    if (localStorage.getItem('authToken')) {
        const authToken = JSON.parse(localStorage.getItem('authToken'));
    const instance = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
      }
    });
    instance.interceptors.response.use(undefined,function(err){
      return new Promise(function (resolve, reject) {

        if (err.response.status === 401 && err.config) {
          store.dispatch('session/mutateLogedStatus',false);
          router.push('login');
          resolve();
        }
        throw err;
      });
    });
    return instance;
  } else {
    return axios.create({
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

