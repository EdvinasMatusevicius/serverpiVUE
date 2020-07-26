export default ()=> ({
    reqStatus: false,
    isLogedIn: !!localStorage.getItem('authToken'),
    user: null
  })