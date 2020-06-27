function btnclick (number){

    var result = document.getElementById("displaytext");
   result.value +=number;
}


function clearresult(){
    var result = document.getElementById("displaytext");
    result.value = " ";
}


function getresult()
{
    var result = document.getElementById("displaytext");
    result.value = eval(result.value)    

}

function squareit()
{
    var result = document.getElementById("displaytext");
    result.value = result.value*result.value;
    
}

function cubeit()
{
    var result = document.getElementById("displaytext");
    result.value = result.value*result.value*result.value;
    
}


function sqt()
{
    var result = document.getElementById("displaytext");
    result.value = Math.sqrt(result.value);
    
    
}


