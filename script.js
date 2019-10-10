function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "nawar" && form.pswrd.value == "22")
  {
    window.open('contact.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}


function validateForm(){
    var usernameInput = document.getElementById("username").value;
    var passswordInput = document.getElementById("password").value;

    sessionStorage.setItem("username", usernameInput );	
    document.getElementById("textToShow").innerHTML = sessionStorage.getItem("username");

}
