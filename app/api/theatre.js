import TheatreTestData from '../testData/theatreTestData';

const TheatreService = {

    
    getTheatreListByDate: function(filmName, date, location, callback) {
        // httpClient.get("api", {film:filmName, date:date, loc:location, theatreService.accountCallback(callback)});
       TheatreTestData.getTheatreByDate(filmName, date, location);
    }
}

export default TheatreService;