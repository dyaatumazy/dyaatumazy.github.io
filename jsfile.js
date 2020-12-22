	function validateForm() {
		var a = 0;
		var b = 0;
		var c = 0;
		var d = 0;
		var e = 0;
		var f = 0;
		var g = 0;
	var x = document.forms["myForm"]["subject"].value;
	 if (x == "" || x == null){
		a = 1;
	}
	var numbers = /^[0-9]+$/;
			var xe = /\d/;
	if ( document.forms["myForm"]["subject"].value.match(xe) ) {
		f = 1;
	}
	var x = document.forms["myForm"]["email"].value;
	 if (x == "" || x == null){
		b = 1;
	}
	var x = document.forms["myForm"]["number"].value;
	 if (x == "" || x == null){
	c = 1;
	}
	
	var x = document.forms["myForm"]["url"].value;
	 if (x == "" || x == null){
	d = 1;
	}
	var x = document.forms["myForm"]["textarea"].value;
	 if (x == "" || x == null){
	e = 1;
	}
	if ( document.forms["myForm"]["textarea"].value.match(numbers)&& document.forms["myForm"]["textarea"].value != "") {
		g = 1;
	}
	if ( a == 1 && b == 1 && c == 0 && d == 0 && e == 0) {
		alert(" Subject,Email field must be filled ");
	}
	if ( a == 1 && c == 1 && b == 0 && d == 0 && e == 0) {
		alert(" Subject,ID field must be filled ");
	}
	if ( a == 1 && d == 1 && b == 0 && c == 0 && e == 0 ) {
		alert(" Subject,URL field must be filled ");
	}
	if ( a == 1 && e == 1 && b == 0 && c == 0 && d == 0 ) {
		alert (" Subject,Message fields must be filled ");
	}
	if ( a == 0 && e == 0 && b == 1 && c == 1 && d == 0 ) {
		alert(" Email,ID fields must be filled ");
	}
	if ( a == 0 && e == 0 && b == 1 && c == 0 && d == 1 ) {
		alert(" Email,URL fields must be filled ");
	}
	if ( a == 0 && e == 1 && b == 1 && c == 0 && d == 0 ) {
		alert(" Email,Message fields must be filled ");
	}
	if ( a == 1 && e == 0 && b == 0 && c == 1 && d == 0 ) {
		alert(" ID,URL fields must be filled");
	}
	if ( a == 0 && e == 1 && b == 0 && c == 1 && d == 0 ) {
		alert(" ID,Message fields must be filled ");
	}
	if ( a == 0 && e == 1 && b == 0 && c == 0 && d == 1 ) {
		alert(" URL,Message fields must be filled ");
	}
	if ( a == 1 && e == 0 && b == 1 && c == 1 && d == 0 ) {
		alert(" Subject,Email and ID fields must be filled ");
	}
	if ( a == 1 && e == 0 && b == 1 && c == 0 && d == 1 ) {
		alert(" Subject,Email and URL fields must be filled ");
	}
	if ( a == 1 && e == 1 && b == 1 && c == 0 && d == 0 ) {
		alert(" Subject,Email and Message fields must be filled ");
	}
	if ( a == 0 && e == 0 && b == 1 && c == 1 && d == 1 ) { 
		alert(" Email,ID and URL fields must be filled ");
	}
	if ( a == 0 && e == 1 && b == 1 && c == 1 && d == 0 ) {
		alert(" Email,ID and Message fields must be filed ");
	}
	if ( a == 1 && e == 0 && b == 0 && c == 1 && d == 1 ) {
		alert(" Subject,ID and URL fields must be filled ");
	}
	if ( a == 1 && e == 1 && b == 0 && c == 1 && d == 0 ) {
		alert(" Subject,ID and Message fields must be filled ");
	}
	if ( a == 1 && e == 1 && b == 0 && c == 0 && d == 1 ) {
		alert(" Subject,URL and message fields must be filled ");
	}
	if ( a == 1 && e == 0 && b == 1 && c == 1 && d == 1 ) {
		alert(" Subject,Email,ID and URL fields must be filled ");
	}
	if ( a == 1 && e == 1 && b == 1 && c == 1 && d == 0 ) {
		alert(" Subject,Email,ID and Message fields must be filled ");
	}
	if ( a == 0 && e == 1 && b == 1 && c == 1 && d == 1 ) {
		alert(" Email,ID,URL and Message fields must be filled ");
	}
	if ( a == 1 && e == 1 && b == 0 && c == 1 && d == 1 ) {
		alert(" Subject,ID,URL and Message fields must be filled ");
	}
	if ( a == 1 && e == 1 && b == 1 && c == 0 && d == 1 ) {
		alert(" Subject,Email,URL and Message fields must be filled ");
	}
	if ( a == 1 && e == 1 && b == 1 && c == 1 && d == 1 ) {
		alert(" All fields are Empty and should be filled ");
	}
	if ( a == 0 && e == 1 && b == 0 && c == 1 && d == 1 ) {
		alert(" ID,URL and Message fields must be filled ");
	}
	if ( a == 0 && e == 1 && b == 0 && c == 0 && d == 0 ) {
		alert(" Message fields must be filled ");
	}
	if ( a == 0 && e == 1 && b == 1 && c == 0 && d == 1 ) {
		alert(" Email,URL and Message fields must be filled ");
	}
	if ( a == 1 && e == 0 && b == 0 && c == 0 && d == 0 ) {
		alert(" Subject field must be filled ");
	}
	if ( f == 1 && g == 0 ) {
		alert(" Subject field should have no numbers ");
	}
	if ( f == 1 && g == 1 ) {
		alert( " Message field should contain a string and Subject field should have no numbers ");
	}
	if ( f == 0 &&g == 1 ) {
		alert( " Message field should contain a string " );
	}
	
	if ( b == 0 ) {
	var domain = document.forms["myForm"]["email"].value.substring(document.forms["myForm"]["email"].value.lastIndexOf("@") +1);
	alert(" The domain of the email is : " + domain);
	}
	var username1 = document.forms["myForm"]["url"].value.substring(document.forms["myForm"]["url"].value.lastIndexOf(".") +1);
	if ( d == 0 && username1 =="io" ) {
		var username = document.forms["myForm"]["url"].value.substring(document.forms["myForm"]["url"].value.lastIndexOf("/") +1).replace('.github.io','');
		alert ( " The username is : " + (username) );
	}
	if ( !(document.forms["myForm"]["number"].value.match(numbers)) && document.forms["myForm"]["number"].value != "") {
		alert(" ID field should only contatin a number ");
	}
	}
