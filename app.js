// fizzBuzz function
const fizzBuzz = (input) => {
    let result = [];
    for (let i = 1; i <= input; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("fizzBuzz");
        } else if (i % 3 === 0) {
            result.push("fizz");
        } else if (i % 5 === 0) {
            result.push("buzz");
        } else {
            result.push(i);
        }
    }

    return result;
};

// jQuery event listener and rendering
$('#button').click(function(event) {
    event.preventDefault();
    $('.js-results').empty();


    function display() {
        var userInput = $("#number-choice").val();
        fizzBuzz(userInput).forEach(function(item) {
            let appendElement = $(`<div class="fizz-buzz-item">
                        <span>${item}</span></div>`);
            if (item === "fizz") {
                appendElement.addClass("fizz");
            }
            if (item === "buzz") {
                appendElement.addClass("buzz");
            }
            if (item === "fizzBuzz") {
                appendElement.addClass("fizzbuzz");
            }
            return $('.js-results').append(appendElement);
        });
    }
    display();
});
