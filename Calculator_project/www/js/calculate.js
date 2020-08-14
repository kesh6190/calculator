function calculate()
	{
		//Retrieving Inputs,Selection
		var x=document.getElementById("num1").value;
		var y=document.getElementById("num2").value;
		var choice=document.getElementById("opnlist");
		
		//Regular Expression for Valid Integer
		var regexnum = /^[-+]?[0-9]+$/;
		
		var result;
		
		if(!(x.match(regexnum))||!(y.match(regexnum)))
		{
			alert("Please Insert A Valid Number❌");
			return false;
		}
		
		else if(choice.value==""||choice.value=="Operation")
		{
			alert("Please Select An Operation❌");
			document.calcform.opnlist.focus();
		}
		
		else if(choice.value=="Addition")
		{	
			//Perform Addition
			result= parseInt(x) + parseInt(y);
			document.getElementById("outcome").innerHTML="<h2>Operation:</h2><br><br><h2>"+x+" ➕ "+y+"</h2><br><br><h2>Results:<br><br>"+result+"</h2>";
		}
		else if(choice.value=="Subtraction")
		{	
			//Perform Subtraction
			result= parseInt(x) - parseInt(y);
			document.getElementById("outcome").innerHTML="<h2>Operation:</h2><br><br><h2>"+x+" ➖ "+y+"</h2><br><br><h2>Results:<br><br>"+result+"</h2>";
		}
		else if(choice.value=="Multiplication")
		{	
			//Perform Multiplication
			result= parseInt(x) * parseInt(y);
			document.getElementById("outcome").innerHTML="<h2>Operation:</h2><br><br><h2>"+x+" ✖️ "+y+"</h2><br><br><h2>Results:<br><br>"+result+"</h2>";
		}
		else if(choice.value=="Division")
		{	
			//Perform Division
			result= parseInt(x) / parseInt(y);
			document.getElementById("outcome").innerHTML="<h2>Operation:</h2><br><br><h2>"+x+" ➗ "+y+"</h2><br><br><h2>Results:<br><br>"+result+"</h2>";
		}
		else
		{
		}
		//Redirection to Result Page
		location.replace("#pg3");	
	}