function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    var s = '<br><center><b>MY TO-DO LIST</b></center><br>';
    var out = "<table cellpadding='20' id='Table1'><tr><th> Select </th><th> Task </th></tr>";
    for(var i=0; i<response.length; i++) {
    out += "<tr><td><input class='hello' type='checkbox' value=i onclick=countChecked(this)>" +"</td><td>" + response[i].title +"</td></tr>";
    }
    document.getElementById("shopList").innerHTML = s + out + "</table>" + "<br>";
    }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
   }
   function countChecked(){
    let myPromise= new Promise(function(myResolve, myReject) {
    var check=document.querySelectorAll('input[type="checkbox"]');
    var complet=document.querySelectorAll('input[type="completed"]');
    var a=0;
    
    for(var i=0;i<check.length;i++){
    if(check[i].checked==true&&check[i].disabled==false){
    a=a+1;
    }
    if(a<5){
    continue;
    }
    else if(a==5){
    myResolve(check);
    }
    } 
    });
    
    myPromise
    .then(function(check){
    alert('Congrats. 5 Tasks have been Successfully Completed');
   // alert('No more selection permitted');
    for(var i=0;i<check.length;i++){
   // check[i].disabled=true;
    }
    }) 
    .catch(function(){
    alert('Error on selection');
    }); 
   }
   
   
   // to edit option. It reset check boxes.
   function editOption(){
    var inputCheck=document.querySelectorAll('#customCheck1');
    for(var i=0;i<inputCheck.length;i++){
    inputCheck[i].checked=false;
    inputCheck[i].disabled=false;
    }
   }