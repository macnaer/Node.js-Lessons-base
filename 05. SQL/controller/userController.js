const GetAllUsersM = require("../model/users");

function GetAllUsers(){
    let result = GetAllUsersM()
        .then(res => {
            console.log(res[0]);
            return res[0];
        })
        .catch(error => {
            return error;
        });
}

module.exports = GetAllUsers;



