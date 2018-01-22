var api = {
    getUsers(){
        var url =`http://localhost:212/user/`;
        return fetch(url).then((res) => res.json());
    }
};  

module.exports = api;