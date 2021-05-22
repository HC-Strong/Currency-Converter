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
