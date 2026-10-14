 let array100 = [];

 for (let i = 1; i <= 100; i++) {
    array100.push(i);
    if (i == 25 || i == 50) {
       console.table(array100);
    }else if (i == 75) {
       console.table(array100);
    }
 }
 
 