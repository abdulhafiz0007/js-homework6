var elForm = document.querySelector(".js-form");
var elFirstInput = elForm.querySelector(".js-input");
var elSecondInput = elForm.querySelector(".js-second-input");
var elTextArea = elForm.querySelector(".js-textarea");
var elResult = document.querySelector(".js-result");

elResult.textContent = "Result: "

elForm.addEventListener("submit", function(evt){

    evt.preventDefault();
    
    var inputFirstValue = elFirstInput.value;
    var inputSecondValue = elSecondInput.value;

    var textareaValue = elTextArea.value;
    var indexFirstInput = textareaValue.indexOf(inputFirstValue);
    var indexSecondInput = textareaValue.indexOf(inputSecondValue, indexFirstInput);
    var inputSlice = textareaValue.slice(indexFirstInput, indexSecondInput);

    elResult.textContent = inputSlice + inputSecondValue;

});


