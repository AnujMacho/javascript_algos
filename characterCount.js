function characterCount(string){
    //to lower case
    string = string.toLowerCase();
    //removing white spaces
    string = string.split(" ").join("");
    var strObject = {}
    //looping
    for(var i=0; i<string.length;i++){
        //verifying if data is present
        if(!strObject[string[i]]){
            strObject[string[i]] = 1;
        }else{
            strObject[string[i]] += 1;
        }
    }
    return strObject;
}

console.log(characterCount("aaAAa  bcad 12344"))