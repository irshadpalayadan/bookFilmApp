const TheatreService = {

    
    getTheatreListByDate: function(filmName, date, location, callback) {
        return fetch('https://bookfilmserver.herokuapp.com/api/theatre');
    }
}

export default TheatreService;