var email=document.querySelector("#email");
var password=document.querySelector("#password");
var retype=document.querySelector("#retype");
var first=document.querySelector("#first");
var gender=document.getElementsByClassName("gender");
var country=document.querySelector("#country");
var terms=document.querySelector("#terms");
var receive=document.querySelector("#receive");
var btn=document.querySelector(".buttonstyle");
console.log(email);

btn.onclick=function(){
    var gendervalue="";
    for(var i=0;i<gender.length;i++){
        if(gender[i].checked){
            gendervalue=gender[i].value;
            console.log(gendervalue);
        }
    }
};