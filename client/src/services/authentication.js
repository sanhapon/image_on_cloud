const authentication = {
    isAuthenticated: false,
    username:'',

    authenticate(username, password) {
        if (username ==='test' && password==='test') {
            this.isAuthenticated = true
            this.username = username;
            return Promise.resolve();
        }
    },

    signout() {
      this.isAuthenticated = false
      return Promise.resolve();
    }
}

export default authentication;