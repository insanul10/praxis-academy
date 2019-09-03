var x = prompt("Masukkan angka pertama ");
var y = prompt("Masukkan angka kedua");
var z = prompt("Masukkan angka ketiga");
if (x>y && x>z)
{
        if (y>z)
        {
            alert(x + ", " + y + ", " +z);
        }
        else
        {
            alert(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             alert(y + ", " + x + ", " +z);
        }
        else
        {
             alert(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            alert(z + ", " + x + ", " +y);
        }
        else
        {
            alert(z + ", " + y + ", " +x);
        }
}        
