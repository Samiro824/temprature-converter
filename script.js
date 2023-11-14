function convertTemperature() {
    // Get input values
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    // Convert Celsius to Fahrenheit if Celsius value is provided
    if (!isNaN(celsius)) {
        var convertedFahrenheit = (celsius * 9/5) + 32;
        document.getElementById("fahrenheit").value = convertedFahrenheit.toFixed(2);
    }

    // Convert Fahrenheit to Celsius if Fahrenheit value is provided
    if (!isNaN(fahrenheit)) {
        var convertedCelsius = (fahrenheit - 32) * 5/9;
        document.getElementById("celsius").value = convertedCelsius.toFixed(2);
    }
}
