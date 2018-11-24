import TheatreTestData from '../testData/theatreTestData'

var theatreService = {

    accountCallback: function(callback) {
        return function(error, response) {
          var data = UserService.parseAccount(response);
          callback(error, data);
        };
      },
    
    getTheatreListByDate : function(filmName, date, location, callback) {
        // httpClient.get("api", {film:filmName, date:date, loc:location, theatreService.accountCallback(callback)});
       return TheatreTestData.getTheatreListByDate(filmName, date, location);
    }
}