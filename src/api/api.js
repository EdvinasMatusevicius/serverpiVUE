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
      console.log(response,'sitas api vidui')
      success(response.data.data);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  },
//---------------------------------------------------------------------------- NEW APPLICATION POST

  addProject: async(body,success,failure)=>{
    try {
      const response = await api().post(API_URL + 'new-application', body);
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
  //--------------------------------------------------------------------------------- SHELL COMMANDS
  runShellCmd: async(body,success,failure)=>{
    try {
      const response = await api().post(API_URL + body.slug+'/shell/'+body.route,body);
      console.log(response,'api command execution success')
      success(response.data);
    } catch (error) {
      failure(error);
    }
  },

  //---------------------------------------------------------------------------SHELL OUTPUT GETTER
  getShell: async(success,failure)=>{
    try {
      const response = await api().get(API_URL + 'shell-values');
      console.log(response,'api shell values get')
      success(response.data.data);
    } catch (error) {
      failure(error);
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

  getProjects: async (success, failure) => {
    try {
      const response = await api().get(API_URL + 'app-list');
      success(response.data.data.appList);
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

