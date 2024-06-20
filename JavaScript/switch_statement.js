var day = 'mon'

// if (day == 'mon'){
//     // Monday case
// }else if (day == 'tue'){
//     // tuesday case
// }
// var day = 'wed'

switch (day) {
    case 'mon':
    case 'other':
        console.log("Monday case Match");
        break;
    case 'tue':
        console.log("Tuesday Case Match");
        break;
    case 'wed':
        console.log("Wednessday Case Match");
        break;
    case 'thu':
        console.log("Thursday Case Match");
        break;
    case 'fri':
        console.log("Friday Case Match");
        break;
    case 'sat':
        console.log("Saturday Case Match");
        break;
    case 'sun':
        console.log("Sunday Case Match");
        break;

    default:
        break;
}

// Fee Voucher status switch case

var status = 2

switch (status) {
    case '1':
        console.log("Paid");
        break;
    case '2':
        console.log("UnPaid");
        break;
    case '3':
        console.log("Partially Paid");
        break;
    case '4':
        console.log("Wave");
        break;

    default:
        break;
}


