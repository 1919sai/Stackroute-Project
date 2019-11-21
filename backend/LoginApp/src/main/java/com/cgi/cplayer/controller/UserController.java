package com.cgi.cplayer.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import com.cgi.cplayer.exception.UserAlreadyExistsException;
import com.cgi.cplayer.exception.UserNotFoundException;
import com.cgi.cplayer.model.User;
import com.cgi.cplayer.service.UserService;

@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;

	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}

	@RequestMapping("/myboot/fetchrecord")
	public ResponseEntity<String> fetch()
	{
		return new ResponseEntity<String>("Welcome!!!" ,HttpStatus.OK);
	}
	
	@PostMapping("/myboot/add")
	public ResponseEntity<?> addrec(@RequestBody User user)
	{
		try {

			userService.saveUser(user);
			return new ResponseEntity<String>("User Created", HttpStatus.OK);

		} catch (UserAlreadyExistsException exception) {
			return new ResponseEntity<String>("Already Exists", HttpStatus.CONFLICT);
		}	
		}
	
	@PostMapping("/myboot/login")
	public ResponseEntity<?> loginchk(@RequestBody User user) 
	{
		try {
			User use=userService.findByEmailIdAndUserPassword(user.getEmailId(),user.getUserPassword());
		} catch (UserNotFoundException e1) {	
			
			return new ResponseEntity<String>("Invalid pwd/email", HttpStatus.UNAUTHORIZED);
}
		try {
			String tok = getToken(user.getEmailId(), user.getUserPassword());
			HashMap<String, String> mp = new HashMap<String, String>();
			mp.put("token", tok);
			return new ResponseEntity<Map>(mp, HttpStatus.OK);
		}
				catch (Exception e) {
			return new ResponseEntity<String>("token not retrieved", HttpStatus.UNAUTHORIZED);
		}
	}
	
	
	@PutMapping("/user/update/{emailid}")
	  public ResponseEntity<?> updateUser(@RequestBody User user,@PathVariable String emailid) {
	      try {
	          User userUpdated = userService.updateUser(emailid, user);
//	           if (userUpdated != null) {
	              return new ResponseEntity<User>(user, HttpStatus.OK);
//	           }
//	           else
//	               return new ResponseEntity<String>("Not Found", HttpStatus.NOT_FOUND);
	      } catch (UserNotFoundException e) {
	          return new ResponseEntity<String>("Not Found", HttpStatus.NOT_FOUND);
	      }
	}
	@GetMapping("/user/getupd/{emailid}")
	    public ResponseEntity<?> getUser(@PathVariable  String emailid) {
	        try {
	        User user=userService.getUserByemailId(emailid);
	                if(userService.getUserByemailId(emailid)==null)
	                 return new ResponseEntity<String>("User not found", HttpStatus.NOT_FOUND);
	                else
	                    return new ResponseEntity<User>(user, HttpStatus.OK);
	        } catch(UserNotFoundException e) {
	            return new ResponseEntity<String>("User not found", HttpStatus.NOT_FOUND);
	        }
	}

		
	private String getToken(String emailId, String password)  {

		long expirationTime=10_00;
		       return Jwts.builder().setSubject(emailId)
		.setIssuedAt(new Date(System.currentTimeMillis()))
		.setExpiration(new Date(System.currentTimeMillis()+expirationTime)).
		signWith(SignatureAlgorithm.HS256,"secretKey").compact();
		 		        
		}

	
	
	

}
