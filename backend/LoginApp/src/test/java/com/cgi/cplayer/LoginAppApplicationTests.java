
package com.cgi.cplayer;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
/*
 package com.cgi.cplayer;

 import org.junit.jupiter.api.Test;

@SpringBootTest
class LoginAppApplicationTests {

	@Test
	void contextLoads() {
	}
	
	

}
*/


import com.cgi.cplayer.exception.UserNotFoundException;
import com.cgi.cplayer.model.User;
import com.cgi.cplayer.repository.UserRepository;
import com.cgi.cplayer.service.UserServiceImp;

@SpringBootTest
public class LoginAppApplicationTests {

    @InjectMocks
    UserServiceImp userService;

    @Mock
    UserRepository userRepository;
    User user;


    List<User> userList = null;
    Optional<User> options;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);

        user = new User();
        user.setEmailId("s@gmail.com");
        user.setUserName("John123");
        user.setUserPassword("johnpass");
        userList = new ArrayList<>();
        userList.add(user);

        options = Optional.of(user);

    }

       @Test
    public void updateUser() throws UserNotFoundException {
        when(userRepository.findByemailId(user.getEmailId())).thenReturn(user);
        user.setUserName("s@gmail.com");
        User fetchuser = userService.updateUser(user.getEmailId(), user);
        assertEquals(user, fetchuser);

    }






}