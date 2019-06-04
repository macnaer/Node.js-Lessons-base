class User {
    constructor(user, pass) {
        this.user = user;
        this.pass = pass;
    }
    ShowUser() {
        console.log(`Username: ${this.user} Password: ${this.pass}`)
    }
}

module.exports  = User;