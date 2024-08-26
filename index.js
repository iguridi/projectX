
function main() {
    // Get the element with the ID "output"
    const outputElement = document.getElementById("output");

    const person = {
        firstName: "Javier",
        occupation: "Software Engineer"
    };

    with (person) {
        outputElement.textContent = "hello " + firstName;
    }
}
