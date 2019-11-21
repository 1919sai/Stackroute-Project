package com.stackroute.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.stackroute.demo.model.Favourite;

@Repository
public interface FavouriteRepo extends JpaRepository<Favourite,String>{

	public Favourite[] findAllFavouriteByEmailId(String emailId);
	public Favourite findByEmailIdAndPid(String emailId,String pid);


}
