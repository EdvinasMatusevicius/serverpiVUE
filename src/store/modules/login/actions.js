import {
    MUTATE_MODEL
} from './mutation-types'

export default {
    mutateModel({commit},modelInfo){
      commit(MUTATE_MODEL,modelInfo);
    },
    async login({commit},{email,password}){

      const response = await axios.post('http://serverpi.ddns.me/api/auth/login',{
        email,
        password
      }).then((response)=>{
        return response.json()
    }).then(({data})=>{
        console.log(data);
    }).catch(function (error) {
        console.log(error);
      });
    }
}