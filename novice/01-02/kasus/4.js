var a = prompt("Masukkan angka pertama ");
var b = prompt("Masukkan angka kedua");
var c = prompt("Masukkan angka ketiga");
var d = prompt("Masukkan angka keempat");
var f = prompt("Masukkan angka kelima");

if (a>b && a>c && a>d && a>f)
{
    alert(a);
}
else if (b>a && b>c && b>d && b>f)
{
    alert(b);
}
else if (c>a && c>b && c>d && c>f)
{
    alert(c);
}
else if (d>a && d>c && d>b && d>f)
{
    alert(d);
}
else
{
    alert(f);
}
