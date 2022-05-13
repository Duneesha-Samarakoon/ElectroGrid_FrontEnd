//page load
$(document).ready(function() 
{ 
	 $("#alertSuccess").hide(); 
	 $("#alertError").hide(); 
}); 

//save button
$(document).on("click", "#btnSave", function(event) 
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
		 		data : $("#formUser").serialize(),
		 		dataType : "text",
		 		complete : function(response, status)
		 		{
		 			onItemSaveComplete(response.responseText, status);
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
				$("#divItemsGrid").html(resultSet.data);
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
		$("#formUser")[0].reset();
}

//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	 $("#hidUserIDSave").val($(this).data("itemid"));
	 $("#userCode").val($(this).closest("tr").find('td:eq(0)').text());
	 $("#userName").val($(this).closest("tr").find('td:eq(1)').text());
	 $("#province").val($(this).closest("tr").find('td:eq(2)').text());
	 $("#areaOffice").val($(this).closest("tr").find('td:eq(3)').text());
	 $("#userTP").val($(this).closest("tr").find('td:eq(4)').text());
	 $("#userEmail").val($(this).closest("tr").find('td:eq(5)').text());
		 $("#userAccounts").val($(this).closest("tr").find('td:eq(6)').text());
});