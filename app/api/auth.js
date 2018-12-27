const AuthApiService = {

    
    signin : function( username, password ) {
        return fetch("https://bookfilmserver.herokuapp.com/m/api/auth/signin?user=" + username + "&pass=" + password);
    }
}

export default AuthApiService;