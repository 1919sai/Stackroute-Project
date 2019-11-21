package com.cgi.cplayer.jwtfilter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.web.filter.GenericFilterBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;

public class JwtMyFilter extends GenericFilterBean {

	@Override
	public void doFilter(ServletRequest req, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
	    final HttpServletRequest request = (HttpServletRequest) req;
	    final String authHeader= request.getHeader("Authorization");
	    if(authHeader==null || !authHeader.startsWith("Bearer ")) {
	    throw new ServletException("Invalid authorization header");
	    }
	    else
	    System.out.println("bearer is " + authHeader);




	    final String compactJws = authHeader.substring(7);
	    
	try {
	    JwtParser jwtParser = Jwts.parser().setSigningKey("secretKey");
	    Jwt jwt= jwtParser.parse(compactJws);
	    Claims claims=(Claims) jwt.getBody();
	    request.setAttribute("claims", claims);
	        System.out.println("in filter" + claims.toString());
	    
	    //request.getSession().setAttribute("loggedInUserId", claims.getSubject());
	    String userId=claims.getSubject();
	    HttpSession httpSession=request.getSession();
	    httpSession.setAttribute("loggedInUserId", userId);
	    
	    }
	catch(SignatureException e)
	    {
	    e.printStackTrace();
	    throw new ServletException("Invalid token from my page");
	    }
	    catch(MalformedJwtException jwtException)
	    {
	    throw new ServletException("JWT is malformed");
	    }

	       chain.doFilter(request, response);

		
		
	}

}
