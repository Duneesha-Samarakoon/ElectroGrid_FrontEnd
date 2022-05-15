package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.User;


@WebServlet("/UserAPI")
public class UserAPI extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	User UserObj = new User();
       
    public UserAPI() {
        super();       
    }

    //GET 
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// not used
	}

	//POST- insert
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String output = UserObj.insertUser(
				request.getParameter("userCode"),
				request.getParameter("userName"),
				request.getParameter("province"),
				request.getParameter("areaOffice"),
				request.getParameter("userTP"),
				request.getParameter("userEmail"),
				request.getParameter("UserAccounts"));
		response.getWriter().write(output);
	}
	// Convert request parameters to a Map
		private static Map<String, String> getParasMap(HttpServletRequest request)
	    {
			Map<String, String> map = new HashMap<String, String>();
			try
			{
				Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
				String queryString = scanner.hasNext() ?
						scanner.useDelimiter("\\A").next() : "";
				scanner.close();
		 
				String[] params = queryString.split("&");
				for (String param : params)
				{ 
					String[] p = param.split("=");
					map.put(p[0], p[1]);
			    }
			 }
					
			 catch (Exception e)
		     {
			 }
			 
			return map;
		}


	//PUT-update
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		{
			Map<String, String> paras = getParasMap(request);
			String output = UserObj.updateUser(paras.get("hidItemIDSave").toString(),
											   paras.get("userCode").toString(),
											   paras.get("userName").toString(),
											   paras.get("province").toString(),
											   paras.get("areaOffice").toString(),
											   paras.get("userTP").toString(),
											   paras.get("userEmail").toString(),
											   paras.get("UserAccounts").toString());
				
			response.getWriter().write(output);
		}
			
	}

	//DELETE
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map<String, String> paras = getParasMap(request);
		String output = UserObj.deleteUser(paras.get("userID").toString());
		response.getWriter().write(output);
	}

}
