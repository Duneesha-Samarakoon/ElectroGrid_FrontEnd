<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="model.User" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User Managment</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/User.js"></script>
</head>
<body>

<div class="container"><div class="row"><div class="col-6">

	<h1>User Details </h1>

	<form id="UserForm" name="UserForm" method="post" action="User.jsp">
 		User code :
 		<input id="userCode" name="userCode" type="text" class="form-control form-control-sm">
 		<br> 
 		User name :
		<input id="usrName" name="usrName" type="text" class="form-control form-control-sm">
 		<br> 
 		Province:
 		<input id="usrProvince" name="usrProvince" type="text" class="form-control form-control-sm">
 		<br> 
 		Area Office :
 		<input id="areaOfz" name="areaOfz" type="text" class="form-control form-control-sm">
 		<br> 
 		Telephone :
 		<input id="usrTl" name="usrTl" type="text" class="form-control form-control-sm">
 		<br> 
 		Email :
 		<input id="usrEmail" name="usrEmail" type="text" class="form-control form-control-sm">
 		<br> 
 		Acconuts:
		<input id="usrAccount" name="usrAccount" type="text" class="form-control form-control-sm">
 		<br>
 		
 		<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
 		<input type="hidden" id="hidUserIDSave" name="hidUserIDSave" value="">
	</form>
	
	<div id="alertSuccess" class="alert alert-success"></div>
	<div id="alertError" class="alert alert-danger"></div>

	<br>
	<div id="divUserGrid">
 		<%
 			User UserObj = new User();
 			out.print(UserObj.readUsers());
 		%>
	</div>
</div> </div> </div>

</body>
</html>