// Get input elements
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertButton = document.getElementById('convert');

// Conversion functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Event listener for the Convert button
convertButton.addEventListener('click', () => {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsiusValue)) {
        fahrenheitInput.value = celsiusToFahrenheit(celsiusValue).toFixed(2);
    } else if (!isNaN(fahrenheitValue)) {
        celsiusInput.value = fahrenheitToCelsius(fahrenheitValue).toFixed(2);
    }
});
