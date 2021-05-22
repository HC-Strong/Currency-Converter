const apiKey = "4438c1a06663d4c28f979c38";
//https://v6.exchangerate-api.com/v6/4438c1a06663d4c28f979c38/latest/USD
const resultPar = jQuery("#result");

const baseUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/`;

function displayResult(json, amount) {
  let resultString = `${amount} ${json.base_code} is equal to ${json.conversion_result.toFixed(2)} ${json.target_code}`;
  jQuery(resultPar).addClass("full").text(resultString);
  console.log("result displayed");
}

document.querySelector("#converter-form")
.addEventListener("submit", (event) => {
  event.preventDefault();
  const fromCurrency = event.target.from.value;
  const toCurrency = event.target.to.value;
  const amount = event.target.amount.value;
  let requestUrl = baseUrl + `/${fromCurrency}/${toCurrency}/${amount}/`;
  let result = fetch(requestUrl)
    .then(response => response.json())
    .then(json => {
      if(json.result=="success") {
        displayResult(json, amount);
      } else {
        alert("Error from Server: " + json["error-type"]);
      }
    });
});
