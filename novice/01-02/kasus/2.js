var x = prompt("Masukkan angka pertama ");
var y = prompt("Masukkan angka kedua");
var z = prompt("Masukkan angka ketiga");

if (x > 0 && y > 0 && z > 0) {
    alert("Tandanya adalah +");
}
else if (x < 0 && y < 0 && z < 0) {
    alert("Tandanya adalah +");
}
else if (x > 0 && y < 0 && z < 0) {
    alert("Tandanya adalah +");
}
else if (x < 0 && y > 0 && z < 0) {
    alert("Tandanya adalah +");
}
else {
    alert("Tandanya adalah -");
}
