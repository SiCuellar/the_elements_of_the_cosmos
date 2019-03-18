// This file is in the entry point in your webpack config.
var search = document.querySelector("#search-input")

function getWeather() {
    fetch('https://frozen-lake-45864.herokuapp.com/api/v1/forecast?location=' + search)
      .then(response => {return response.json()})
      .then(data => {service(data)})
  }

function current (raw_data) {
current = {
    current: raw_data["data"]["attributes"]["predict"]["currently"]
}
}

