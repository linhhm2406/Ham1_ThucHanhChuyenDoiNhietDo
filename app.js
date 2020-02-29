function temp_convert(F_temp) {
    F_temp = parseFloat(document.getElementById('input_temp').value);
    let C_temp = parseFloat((F_temp-32)/1.8);
    document.getElementById('output_temp').value = C_temp;
}

// Cach lam khac
// function temperatureConverter(valNum) {
//     valNum = parseFloat(valNum);
//     document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
// }