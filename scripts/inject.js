var studentLogin = "https://exam.ioe.edu.np/studentLogin";
var panelHeadingText = "Student Login : Please login with below details "
var newPanelHeadingText = "Student Login"
var logInButtonText = " Log In ";

if (window.location.href == "^" + studentLogin) {

	document.body.classList.add("nobgr");
	var colorline = document.querySelector(".color-line")
	colorline.remove();
	var logo = document.querySelector("img").parentElement;
	logo.classList.add("loginLogo");
	var heading = document.querySelector(".heading");
	heading.classList.add("heading");

	// logo.remove();

	panelHeading = document.querySelector(".panel-heading");
	panelHeading.classList.add("studentLogin");

	if(panelHeading.innerHTML == panelHeadingText){
		panelHeading.innerHTML = newPanelHeadingText;
	}

	loginPanel = document.querySelector(".panel.panel-default");
	loginPanel.classList.add("loginPanel");


	var roll = document.querySelectorAll(".col-md-4");

	var loginPanel = document.querySelector(".panel.panel-default");
	loginPanel.classList.add("loginPanel");

	loginButton = document.querySelector(".btn.btn-primary");
	loginButton.classList.add("loginButton");
	loginButton.innerHTML = logInButtonText;

 RealLoginButton = loginButton.parentElement;
 RealLoginButton.children[0].setAttribute("style", "border-radius: 20px !important");

 footer = document.querySelector(".blue.navbar-fixed-bottom1")
 footer.classList.remove("navbar-fixed-bottom1")
 footer.classList.add("navbar-fixed-bottom")

var realFooter = footer.children[1];

footer.innerHTML = "";
footer.appendChild(realFooter);


}