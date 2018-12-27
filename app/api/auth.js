const AuthApiService = {

    
    signin : function( username, password ) {
        return fetch("https://bookfilmserver.herokuapp.com/m/api/auth/signin?user=" + username + "&pass=" + password, {method: 'GET', credentials:'include'});
    },
    signup: function( username, password, phno, email ){
        return fetch("http://localhost:5000/api/auth/signup?user="+username+"&email="+email+"&phno="+phno+"&pass="+password, {method: 'POST', credentials:'include'})
    },
}

export default AuthApiService;