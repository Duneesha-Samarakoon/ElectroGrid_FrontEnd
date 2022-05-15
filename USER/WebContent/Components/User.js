//page load
$(document).ready(function() 
{ 
	 $("#alertSuccess").hide(); 
	 $("#alertError").hide(); 
}); 

//save button
$(document).on("click", "#btnSave", function() 
{ 
			// Clear status msges---------------------
			$("#alertSuccess").text(""); 
			$("#alertSuccess").hide(); 
			$("#alertError").text(""); 
			$("#alertError").hide();
			
			// Form validation-------------------
			var status = validateUserForm();
			if (status != true)
			{
				 $("#alertError").text(status);
		 		 $("#alertError").show();
		 		 return;
		 	}
			
			// If valid-------------------------
		 	var type = ($("#hidUserIDSave").val() == "") ? "POST" : "PUT";

			$.ajax(
		 	{
		 		url : "UserAPI",
		 		type : type,
		 		data : $("#UserFrom").serialize(),
		 		dataType : "text",
		 		complete : function(response, status)
		 		{
		 			onUserSaveComplete(response.responseText, status);
		 		}
		 	}); 

});

//function onUserSaveComplete
function onUserSaveComplete(response, status)
{
	if (status == "success")
	{
		 var resultSet = JSON.parse(response);
			 if (resultSet.status.trim() == "success")
		 {
				$("#alertSuccess").text("Successfully saved.");
				$("#alertSuccess").show();
				$("#divUserGrid").html(resultSet.data);
			 } 
			 else if (resultSet.status.trim() == "error")
		 {
				$("#alertError").text(resultSet.data);
				$("#alertError").show();
			 }
		} 
		else if (status == "error")
		{
			$("#alertError").text("Error while saving.");
			$("#alertError").show();
		} 
		else
		{
			$("#alertError").text("Unknown error while saving..");
			$("#alertError").show();
		}
		$("#hidUserIDSave").val("");
		$("#UserFrom")[0].reset();
}

//UPDATE==========================================
$(document).on("click", ".btnUpdate", function()
{
	 $("#hidUserIDSave").val($(this).closest("tr").find('#hidUserIDUpdate').val())
	 $("#userCode").val($(this).closest("tr").find('td:eq(0)').text());
	 $("#usrName").val($(this).closest("tr").find('td:eq(1)').text());
	 $("#usrProvince").val($(this).closest("tr").find('td:eq(2)').text());
	 $("#areaOfz").val($(this).closest("tr").find('td:eq(3)').text());
	 $("#usrTl").val($(this).closest("tr").find('td:eq(4)').text());
	 $("#usrEmail").val($(this).closest("tr").find('td:eq(5)').text());
	 $("#usrAccount").val($(this).closest("tr").find('td:eq(6)').text());
});

$(document).on("click", ".btnRemove", function(event)
{
$.ajax(
{
	 	url : "UserAPI",
	 	type : "DELETE",
	 	data : "userID=" + $(this).data("userid"),
	 	dataType : "text",
	 	complete : function(response, status)
	 	{
	 		onUserDeleteComplete(response.responseText, status);
	 	}
	 	});
});

//function onItemDeleteComplete
function onUserDeleteComplete(response, status)
{
	if (status == "success")
		{
			var resultSet = JSON.parse(response);
			if (resultSet.status.trim() == "success")
			{
				$("#alertSuccess").text("Successfully deleted.");
				$("#alertSuccess").show();
				$("#divUserGrid").html(resultSet.data);
			} 
			else if (resultSet.status.trim() == "error")
			{
				$("#alertError").text(resultSet.data);
				$("#alertError").show();
			}
		} 
		else if (status == "error")
		{
				$("#alertError").text("Error while deleting.");
				$("#alertError").show();
		} 
		else
		{
				$("#alertError").text("Unknown error while deleting..");
				$("#alertError").show();
		}
}

//CLIENT-MODEL================================================================
function validateUserForm()
{
	// CODE
	if ($("#usrCode").val().trim() == "")
	{
			return "Insert User Code.";
		}

	// NAME
	if ($("#usrName").val().trim() == "")
		{
			return "Insert User Name.";
		}

	// PROVINCE
	if ($("#usrProvince").val().trim() == "")
		{
			return "Insert Province.";
		}
		
	// AREA OFFICE
	if ($("#areaOfz").val().trim() == "")
		{
			return "Insert Area Office.";
		}
		
	// TELEPHONE
	if ($("#usrTl").val().trim() == "")
		{
			return "Insert Telephone Number.";
		}
	
	// Email
	if ($("#usrEmail").val().trim() == "")
		{
			return "Insert Email.";
		}

	// USER ACCOUNTS
	if ($("#usrAccount").val().trim() == "")
	{
			return "Insert Account Number.";
		}

	return true;
}

