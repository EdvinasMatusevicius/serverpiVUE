const state= ()=> ({
  projects:[
      {
          name:'News site',
          slug:'news-site',
          github:'https://github.com/EdvinasMatusevicius/my-news',
          language:'1'
      },
      {
        name:'News site2',
        slug:'news-site',
        github:'https://github.com/EdvinasMatusevicius/my-news',
        language:'1'
    },
    {
        name:'News site3',
        slug:'news-site',
        github:'https://github.com/EdvinasMatusevicius/my-news',
        language:'1'
    },
  ],
  navigations:[
      {
        id:1,
        name:'Add new project',
        route:'/new-project',
        icon:'mdi-plus-box',
        color:''
      },
  ]

})
const mutations = {
    
}
const actions = {
}
const getters = {
  getProjects:({projects})=>projects,
  getNavigations:({navigations})=>navigations
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }