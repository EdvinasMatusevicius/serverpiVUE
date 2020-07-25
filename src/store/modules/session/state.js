export default ()=> ({
    status: '',
    isLogedIn: !!localStorage.getItem('authToken'),
    user: null
  })