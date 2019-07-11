const GetAllUsersM = require("../model/users");

function GetAllUsers(){
    let result = GetAllUsersM()
        .then(res => {
            let user = res[0][0];
            let users = {
                id: user.id,
                username: user.username,
                password: user.password,
                email: user.email,
                role: user.role
            }
            console.log(users);
            return users;
        })
        .catch(error => {
            return error;
        });
        return result;
}

module.exports = GetAllUsers;



