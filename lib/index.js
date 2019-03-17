// This file is in the entry point in your webpack config.
var search = document.querySelector("#search-input")

function getWeather() {
    fetch('https://frozen-lake-45864.herokuapp.com/api/v1/forecast?location=' + search)
      .then(response => {return response.json()})
      .then(data => {service(data)})
  }

  function service (raw_forecast) {
    service = {
      current: raw_forecast["data"]["attributes"]["predict"]["currently"]
    }
  }

