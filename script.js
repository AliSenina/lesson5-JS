// Завдання 1
// const ask=+prompt(`Введіть число місяця`)

// switch (ask) {
//     case 1:
//         alert(`січень`);
//         break;
//         case 2:
//         alert(`лютий`);
//         break;
//         case 3:
//         alert(`березень`);
//         break;
//         case 4:
//         alert(`квітень`);
//         break;
//         case 5:
//         alert(`травень`);
//         break;
//         case 6:
//         alert(`червень`);
//         break;
//         case 7:
//         alert(`липень`);
//         break;
//         case 8:
//         alert(`серпень`);
//         break;
//         case 9:
//         alert(`вересень`);
//         break;
//         case 10:
//         alert(`жовтень`);
//         break;
//         case 11:
//         alert(`листопад`);
//         break;
//         case 12:
//         alert(`грудень`);
//         break;
//     default:
//        alert(` це неможливо!`)
// }

// Завдання 2
// function f1(a) {
//   for (let i = 2; i <= a; i++) {
//     if (a % i === 0) {
//       return `число непросте`;
//     }
//     return `число просте`;
//   }



// }

// const result = f1(6)
// console.log(result)
//Завдання 3

function max(...a) {
  let max = a[0];

  for (let i = 0; i < a.length; i++) {
    const current=a[i];
    if (current> max) {
      max = current;
      
    }
  }

  alert(max)
  return max;

}

max(25,30,8)
