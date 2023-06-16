class Weather {
    constructor(city){
        this.apikey = '99f0c973ae4d4df0932203859231406';
        this.city = city;
        //this.state = state;
    }

    //Fetch weather from api
    async getWeather() {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=99f0c973ae4d4df0932203859231406&q=${this.city}`)
    
    const responseData = await response.json();

    return responseData;
    }

    //change location
    changeLocation(city){
        this.city = city;
        //this.state = state;
    }
}