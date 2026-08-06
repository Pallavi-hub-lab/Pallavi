function validateStatusCode(status)
{
    if(status >= 200 && status <= 300)
    {
        return "Request is fine";
    }
    return "Request is not fine";
}

//const statuscode = function(status)
//{
  //  if(status >= 200 && status <= 300)
    //{
      //  console.log("Request is fine");
    //}
//}

//const validatecode = (status) =>
//{
  //  if(status >= 200 && status <= 300)
    //{
      //  console.log("Request is fine");
    //} 
// }

console.log(validateStatusCode(200));
//console.log(statuscode(300));
//console.log(validatecode(200));