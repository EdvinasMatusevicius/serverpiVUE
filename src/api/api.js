import axios from 'axios'
import store from '../store'
import router from '../router/index'


const API_URL = 'http://localhost:8000/api/';
// const API_URL = 'http://api.serverpi.ddns.me/api/';

export default {
  //--------------------------------------------------------------USER AUTH AND SESSION
  login: async (body, success, failure) => {
    try {
      const response = await api().post(API_URL + 'auth/login', body);
      success(response.data.data.token);
    } catch (context) {
      console.log(context)
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
  deleteAcc: async () => {
    try {
      await api().delete(API_URL + 'user/delete');
    } catch (err) {
      console.log(err);
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
      const response = await api()[body.request](API_URL + body.slug+'/'+body.route,body);
      success(response.data.data);
    } catch (error) {
      failure(error);
    }
  },
  //---------------------------------------------------------------------------APPLICALTION CONFIGURATION IN SHELL PANEL
  saveShareStatus: async(body,success,failure)=>{
    try {
      const response = await api().post(API_URL + body.slug+'/share',body);
      success(response.data.data);
    } catch (error) {
      failure(error);
    }
  },
  saveApplicationImage: async(body,success,failure)=>{
    try {
      const response = await api().post(API_URL + body.slug+'/image',body.image);
      success(response.data.data);
    } catch (context) {
      let errorsMessage = JSON.parse(context.response.request.response);
      failure(errorsMessage.errors.image[0]);
    }
  },
  //---------------------------------------------------------------------------SHELL OUTPUT GETTER
  getShell: async(success,failure)=>{
    try {
      const response = await api().get(API_URL + 'shell-values');
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
  },
  getApplicationDatabase: async (body, success, failure) => {
    try {
      const response = await api().get(API_URL + body.slug + '/database');
      success(response.data.data.database);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  },
  getApplicationShareStatus: async (slug,success,failure)=>{
    try {
      const response = await api().get(API_URL + `${slug}/share-status`);
      success(!!response.data.data.share);
    } catch (context) {
      // let errorsMessages = [];
      // const { errors } = context.response.data;
      // for (const errorName in errors) {
      //   errorsMessages = [...errorsMessages, ...errors[errorName]];
      // }
      failure(context);
    }
  }
}
//--------------------------------------------------------------------------------------------AXIOS HEADER CONFIGURATION
function api() {
    
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

