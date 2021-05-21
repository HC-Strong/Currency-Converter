console.log("started");
const apiKey = "4438c1a06663d4c28f979c38";
const resultPar = jQuery("#result");

let result = fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
  .then(response => response.json())
  .then(json => displayResult(json));

function displayResult(json) {
  jQuery(resultPar).text(json.conversion_rates.CAD);
  console.log("done");
}
