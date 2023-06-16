const storage = new Storage;
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);
const ui = new UI;

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    //set location in local storage
    storage.setLocationData(city);

    weather.changeLocation(city);

    //get and display weather
    getWeather();

    //close modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
            console.log(results);
        })
        .catch(err => console.log(err));
}