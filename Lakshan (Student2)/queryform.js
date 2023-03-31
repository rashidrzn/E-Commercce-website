//const name = document.getElementById('name')
//const email = document.getElementById('email')
//const form = document.getElementById('form')
//const details = document.getElementById('details')
//const errorElement = document.getElementById('error')


button = document.getElementById("formbutton");
var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
function validateForm() {

  var formrefresh = document.getElementById("form");
  function handleForm(event) {
    event.preventDefault();
  }
  
  
  var namevalidate =  document.getElementById("name").value;
  var emailvalidate = document.getElementById("email").value.match(pattern);
  var emailval = document.getElementById("email").value;
  var details = document.getElementById("details").value.length;

  if(namevalidate.length == 0) {
    alert("Please Enter Name");
    formrefresh.addEventListener("submit", handleForm);
    return;
  }else if(emailvalidate == false | emailval == "") {
    alert("Invalid email");
    formrefresh.addEventListener("submit", handleForm);
    return;
  }else if (details < 10) {
    alert("Add more details");
    formrefresh.addEventListener("submit", handleForm);
    return;
  } else {
    form.action = "mailto:lakshancosta2@gmail.com";
  }

}



function submitform() {

  globalThis.name = document.getElementById("name").value;
  globalThis.email = document.getElementById("email").value;
  var subject = document.querySelector('input[name="subject"]:checked').id;
  var details = document.getElementById("details").value;

  document.getElementById('container').innerHTML = document.getElementById("display_replacment").innerHTML;

  document.getElementById("display_name").innerText = globalThis.name;
  document.getElementById("display_email").innerText = globalThis.email;
  document.getElementById("display_subject").innerText = subject;
  document.getElementById("display_details").innerText = details;
  


}

function editform() {

  var formrefresh1 = document.getElementById("edit");
  function handleForm(event1) {
    event1.preventDefault();
  }
  formrefresh1.addEventListener("submit", handleForm);
  alert(globalThis.name);

  

  globalThis.name =document.getElementById("display_name").innerText;
  
  document.getElementById("name").value = globalThis.name;


  showform();
  
  //document.getElementById('display_replacment').innerHTML = document.getElementById("container").innerHTML;

 // document.getElementById('container').style.display = "inline";
  //document.getElementById('form').style.display = "inline";
  //document.getElementById('display_replacment').style.display = "none";

  alert("dfgdfg");


  


  
  //document.getElementById('for_replacement').innerHTML = document.getElementById("container").innerHTML;
  //document.getElementsByName("email").value = globalThis.email.innerHTML;
  

  //document.getElementById("display_replacment").style.cssText = "display: inline";
  
}

function showform() {
  document.getElementById('display_replacment').innerHTML = document.getElementById("container").innerHTML;
}
