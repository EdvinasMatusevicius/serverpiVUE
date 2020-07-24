import axios from 'axios';

const API_URL = 'http://serverpi.ddns.me/api/';
const api = () => createApiInstance();

export default {
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
      failure(errorsMessages);
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

function createApiInstance() {
    if (localStorage.authToken) {
        const authToken = JSON.parse(localStorage.authToken);
    // Automatiškai grąžinamas autorizuotas axios instance, 
    return axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
      }
    })
  } else {
    // Automatiškai grąžinamas NEautorizuotas axios instance, 
    return axios.create({
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

