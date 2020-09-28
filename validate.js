<html>
<head>
	<script type="text/javascript">
	function validation () {
		var email = document.myform.email.value;

			if (email=="")
			 {
			 	alert("enter your email");
			 	return false;

			};
		 if (!/^[A-Za-z]+@[A-Za-z0-9]+(?:\.[A-Za-z]+)*$/.test(email))) 
			{
		 		alert("enter valid email");
		 		return false;
		 	};
	}


	</script>
</head>
<body>
	<form name="myform" method="post" action="" onsubmit="return validation()">
		<p>enter your email</p>
		<input type="text" name="email">
		<input type="submit" name"validate" value="validate">

	</form>
</body>
<html>
