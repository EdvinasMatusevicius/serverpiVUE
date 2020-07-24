export default ()=> ({
    status: '',
    isLogedIn: !!localStorage.authToken,
    user: null
  })