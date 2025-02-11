// Prefer constant variable if variable's value no need to change
const accontNo=123456;
/*
let key is used for variable where we can change the value and always prefer let key instead var key
because javascript have a issue with block and function scope issue and it has been overcome using let key 
 */
let emailId="simrangupta123@gmail.com"
var password="12345"
//JS allow to create variable without defining with /const/let/var, but never prefer
city="Bangaluru"
let mobileNo;
let accountStatus=null
console.table([accontNo, emailId, password, city, mobileNo, accountStatus])
