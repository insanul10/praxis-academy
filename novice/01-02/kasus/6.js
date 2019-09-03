var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Rata rata nilai: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Nilai : F");      
          } 
        else if (avg < 70) {
                console.log("Nilai : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Nilai : C"); 
        } else if (avg < 90) {
                console.log("Nilai : B"); 
        } else if (avg < 100) {
                console.log("Nilai : A"); 
}
