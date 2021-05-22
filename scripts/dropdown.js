// Generates Currency Options for dropdown form selection
// Uses supportedCurrencies constant in currencies.js as source of list
let datalist = jQuery("#currencies");

$.each(supportedCurrencies, function (i, item) {
    $('#currencies').append($('<option>', {
        value: item.code,
        text : item.name
    }));
});
console.log("Currency Dropdowns Created");

//Add event listener to dropdowns to update the visible output name when the dropdown changes
jQuery(".currency-input").on('change',function(){

  let val = event.target.value;
  let text = supportedCurrencies[val].name;
  let name = event.target.name;
  console.log($(this).val() + ", " + supportedCurrencies[$(this).val()].name);
  jQuery('output[for="'+name+'"]').text(text);
});
