<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User Managment</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/UserService.js"></script>
</head>
<body>

<div class="container"> 
 	<div class="row">
 		<div class="col-8"> 
 			<h1 class="m-3">User details</h1> 
 			
 			<form id="formUser"> <!--  ------ -->
 			
 			<!-- User Code -->
			<div class="input-group input-group-sm mb-3">
			<div class="input-group-prepend">
			 <span class="input-group-text" id="lblName">User Code: </span>
			</div>
			<input type="text" id="usrCode" name="usrCode">
			</div>
			
 			<!-- User NAME -->
			<div class="input-group input-group-sm mb-3">
			<div class="input-group-prepend">
			 <span class="input-group-text" id="lblName">User Name: </span>
			</div>
			<input type="text" id="usrName" name="usrName">
			</div>
			
			<!-- User Province -->
			<div class="input-group input-group-sm mb-3">
			<div class="input-group-prepend">
			 <span class="input-group-text" id="lblName">Province: </span>
			</div>
			<input type="text" id="usrProvince" name="usrProvince">
			</div>
			
			<!-- Area Office -->
			<div class="input-group input-group-sm mb-3">
			<div class="input-group-prepend">
			 <span class="input-group-text" id="lblName">Area Office: </span>
			</div>
			<input type="text" id="areaOfz" name="areaOfz">
			</div>
			
			<!-- Telephone -->
			<div class="input-group input-group-sm mb-3">
			<div class="input-group-prepend">
			 <span class="input-group-text" id="lblName">Telephone: </span>
			</div>
			<input type="text" id="usrTl" name="usrTl">
			</div>
 			
 			<!-- User Email -->
			<div class="input-group input-group-sm mb-3">
			<div class="input-group-prepend">
			 <span class="input-group-text" id="lblName">Email: </span>
			</div>
			<input type="text" id="usrEmail" name="usrEmail">
			</div>
			
			<!-- User Accounts -->
			<div class="input-group input-group-sm mb-3">
			<div class="input-group-prepend">
			 <span class="input-group-text" id="lblName">Accounts: </span>
			</div>
			<input type="text" id="usrAccount" name="usrAccount">
			</div>
 			
 			<input type="button" id="btnSave" value="Save" class="btn btn-primary">
 			
 			</form>
		</div>
 	</div>
 	
 	<div id="alertSuccess" class="alert alert-success"></div>
 	<div id="alertError" class="alert alert-danger"></div>
 
 	<br> 
	<div class="row">
		 <div class="col-12" id="colUsers">
		 
		 </div>
	</div>
</div>
</body>

	


</html>