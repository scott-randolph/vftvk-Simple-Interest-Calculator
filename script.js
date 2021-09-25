function compute()
{
    // set the variables to recieve the values from the users input
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
	
	// convert the initial values into the interest amount
	var interest = principal * years * rate /100;
	
	// add the number of years to the current year
    var year = new Date().getFullYear()+parseInt(years);
	
	// set amount = to interest as the result calls for amount variable
	var amount = interest
	
	// check if the principal amount is a positive number
	// if the principal is less than or equal to 0 alert the user and set focus back to principal input box
	if (principal <= 0) {
		alert ("Enter a positive number")
		document.getElementById("principal").focus();
	}
	
	// if a positive number was entered display the result.
	else {	
		document.getElementById("result").innerHTML =
		"If you deposit " + "<mark>" + principal + "</mark>" + ",\<br\>at an interest rate of "
		+ "<mark>" + rate + "</mark>" +"%\<br\>You will receive an amount of " + "<mark>" + amount + "</mark>" +
		",\<br\>in the year " + "<mark>" + year + "</mark>" + "\<br\>";
	}
}

// update the rate on the range slider when it moves
function updateRate() {
			var rateval = document.getElementById("rate").value;
			document.getElementById("rate_val").innerHTML = rateval + "%";
}
        