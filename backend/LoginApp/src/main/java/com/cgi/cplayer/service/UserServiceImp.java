package com.cgi.cplayer.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cgi.cplayer.exception.UserAlreadyExistsException;
import com.cgi.cplayer.exception.UserNotFoundException;
import com.cgi.cplayer.model.User;
import com.cgi.cplayer.repository.UserRepository;

@Service 
public class UserServiceImp implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	

	public UserServiceImp(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@Override
	public User findByEmailIdAndUserPassword(String emailId, String userPassword) throws UserNotFoundException {
		// TODO Auto-generated method stub
		 User uobj = userRepository.findByEmailIdAndUserPassword(emailId, userPassword);
	        if (uobj == null) {
	            throw new UserNotFoundException("EmailId and UserPassword mismatch");
	        }
	        return uobj;
	}

	@Override
	public boolean saveUser(User user) throws UserAlreadyExistsException {
		// TODO Auto-generated method stub
		/*  Optional<User> uobj = userRepository.findByEmailId(user.getEmailId());
        if (uobj.isPresent()) {
            throw new UserAlreadyExistsException("User Already exists");
        }
        */
	if(userRepository.existsById(user.getEmailId())==true)
        throw new UserAlreadyExistsException("User Already exists");
	else
        userRepository.save(user);
        return true;
	}

	
	@Override
	public User updateUser(String emailId, User user) throws UserNotFoundException {
	User uobj=userRepository.findByemailId(emailId);
	if (uobj == null) {
	throw new UserNotFoundException("User Not Found");
	}
	else
	{
	userRepository.save(user);

	}
	return user;
	}

	public User getUserByemailId(String emailId) throws UserNotFoundException {
	if(userRepository.findByemailId(emailId)==null) {
	throw new UserNotFoundException("User does not exists");
	}
	return userRepository.findByemailId(emailId);
	}


}
