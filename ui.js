class UI{
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        //this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }


paint(weather) {
    this.location.textContent = weather.location.name;
    this.desc.textContent = weather.current.condition.text;
    this.string.textContent = weather.current.temp_c;
    //this.details.textContent = weather.
    this.icon.setAttribute('src', weather.current.condition.icon);
    this.humidity.textContent = `Relative Humidity ${weather.current.humidity}`;
    this.feelsLike.textContent = `Feels Like ${weather.current.feelslike_c}`;
    //this.dewpoint.textContent = weather.current.
    this.wind.textContent = `Wind Speed ${weather.current.wind_mph}`;

}

}