const accountID = 11223344
let accountEmail = 'abc@gmail.com'
var accountPassword = "1234@5"
let accountState;
/*avoid to use var cz issue in scope definition 
  in block scope and functional scope
*/
accountCity= "Pune"
// accountId=12345
//console.log(accountID);
accountEmail =  "xyz@gmail.com"
accountPassword = "abc123"
accountCity = "Vellor"

console.table([accountEmail, accountID, accountCity, accountState]);


