package com.cgi.cplayer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cgi.cplayer.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User findByEmailIdAndUserPassword(String emailId, String userPassword);
    public User findByemailId(String emailId);


}
