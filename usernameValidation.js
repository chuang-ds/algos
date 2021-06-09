function usernameValidation(str) { 
    if (str.length <4 || str.length >25){
      return false;
    }
    if (str[0].toLowerCase() < "a" || str[0].toLowerCase() > "z"){
      return false;
    }
    if (str.endsWith("_")){
      return false;
    }
    var dict = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","_"];
    for (var i = 0; i<str.length; i++){
      if (!dict.includes(str[i].toLowerCase())){
        return false;
      }
    }
    return true;
  }
     
  // keep this function call here 
  console.log(usernameValidation("cheto"));
  console.log(usernameValidation("Chet Huang"));
  console.log(usernameValidation("Bob"));