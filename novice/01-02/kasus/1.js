var num1, num2;
num1 = window.prompt("Masukkan angka pertama");
num2 = window.prompt("Masukan angka kedua");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  console.log("Angka terbesar dari "+ num1+ "dan "+ num2+ " adalah "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("Angka terbesar dari "+ num1+" dan "+ num2+ " adalah "+ num2+ ".");
  }                  
else
  {
   console.log("Nilai "+ num1+ " dan "+num2+ " adalah sama");
  }
  