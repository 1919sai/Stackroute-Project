package com.cgi.cplayer.service;

import com.cgi.cplayer.exception.UserAlreadyExistsException;
import com.cgi.cplayer.exception.UserNotFoundException;
import com.cgi.cplayer.model.User;

public interface UserService {
    User findByEmailIdAndUserPassword(String emailId, String userPassword)throws UserNotFoundException;

	boolean saveUser(User user) throws UserAlreadyExistsException;
	User updateUser(String userId,User user) throws UserNotFoundException;
	User getUserByemailId(String emailId) throws UserNotFoundException;
}
