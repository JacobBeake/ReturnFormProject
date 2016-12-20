validate();

function validate() {
	
	"use strict";	
	
	var errorMsg 	= "";
	var regex		= /0/;
	var test 		= false;
	
	var productSelect 	= document.getElementById("productType");
	var productString	= productSelect.options[productSelect.selectedIndex].value;
	
	var stateSelect 	= document.getElementById("state");
	var stateString		= stateSelect.options[stateSelect.selectedIndex].value;
	
	// First Name;
	regex = /\w/;
	test = regex.test(document.returnForm.fname.value);
	if(document.returnForm.fname.value.length < 2 && test === true)
	{
		errorMsg += "ERROR: First name must be 2 characters are more. \n";	
	}

	// Middle Initial;
	regex = /[0-9]/;
	test = regex.test(document.returnForm.mi.value);
	if(document.returnForm.mi.value.length !== 1 && test === false)
	{
		errorMsg += "ERROR: Middle initial must be 1 character. \n";
	}
	
	// Last Name;
	regex = /[0-9]/;
	test = regex.test(document.returnForm.lname.value);
	if(document.returnForm.lname.value.length < 2 && test === false)
	{
		errorMsg += "ERROR: Last name must be 2 characters or more. \n";	
	}
	
	// Product Type;
	if(productString === "none")
	{	
		errorMsg += "ERROR: Please select product type. \n";
	}
	
	// Reason For Return;
	if(document.returnForm.reason.value.length < 1)
	{
		errorMsg += "ERROR: Please provide a reason for return. \n";	
	}
	
	// Street Address;
	regex = /\d\s\w/;
	test = regex.test(document.returnForm.address.value);
	if(document.returnForm.address.value.length < 1 && test === true)
	{
		errorMsg += "ERROR: Please provide a street address. \n";
	}
	
	// State;
	if(stateString === "none")
	{
		errorMsg += "ERROR: Please select state. \n";	
	}
	
	// City;
	if(document.returnForm.city.value.length < 1)
	{
		errorMsg += "ERROR: Please provide city. \n";	
	}
	
	// ZIP Code;
	if(document.returnForm.zip.value.length !== 5)
	{
		errorMsg += "ERROR: Please enter valid ZIP code. \n";	
	}
	
	if(errorMsg !== "")
	{
		alert(errorMsg);
		return(false);	
	}
	else
	{
		alert("Success");
		return(true);
	}
}