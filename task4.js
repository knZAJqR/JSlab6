const convertCelsiusToFahrenheit = (celsius) => 
{
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
};

let celsius = 25;
let fahrenheit = convertCelsiusToFahrenheit(celsius);

console.log(fahrenheit);