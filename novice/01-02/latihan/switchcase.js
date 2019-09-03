var fruittype = prompt("Masukkan Buah yang Anda suka");
switch (fruittype) {
    case 'Oranges':
      document.write('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      document.write('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      document.write('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      document.write('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
      document.write('Mangoes are $0.56 a pound.');
      break;
    case 'Papayas':
      document.write('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
     document.write('Sorry, we are out of ' + fruittype + '.');
  }
  console.log("Is there anything else you'd like?");