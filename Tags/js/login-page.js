var u_name = document.myForm.u_name;
var u_pass = document.myForm.u_pass;

var name = "adii";
var pass = "ad11";

function runMe(){
    if(u_name.value == name && u_pass.value == pass){
        console.log("Authenticated");
    }else{
        console.log("fuck off");
    }
}