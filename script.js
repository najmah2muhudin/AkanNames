function app(){
    var DD =document.getElementById("day").value;
    var MM =document.getElementById("month").value;
    var YY =document.getElementById("year").value;
    var CC =document.getElementById("century").value;

    /*var weekday = new Date(yy + "/" + mm + "/" + dd);
    var output = document.getElementById("output")
    var finalResult = weekday.getDay()*/

    var male =document.getElementById("male");
    var female = document.getElementById("female");
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames =["Akosuo", "Adwoa", "Abenna", "Akua", "Yaa", "Afua",
    "Ama"];
    
    if(month<1  || day>31){

        alert("please enter a valid month");
    }
    else if(day<1 || day>31){
        alert("please enter a valid day");
    } else{
        var d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
        var win = parseInt(d);
    }
    
    
    
    if(male.checked == true){
        alert("Hi, your Akan name is " + maleNames[win]);
    }
    else if(female.checked == true) {
        alert("Hi, your Akan name is " + femaleNames[win]);
    }
    else{
        alert("Please select your gender");
    }
}