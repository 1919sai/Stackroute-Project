package com.stackroute.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.demo.exception.FavouritePlayerAlreadyExistsException;
import com.stackroute.demo.exception.FavouritePlayerNotFoundException;
import com.stackroute.demo.model.Favourite;
import com.stackroute.demo.repository.FavouriteRepo;

@Service
public class FavouriteServiceImpl implements FavouriteService{
	@Autowired

	private FavouriteRepo favouriteRepository;


	public FavouriteServiceImpl(FavouriteRepo favouriteRepository) {
		super();
		this.favouriteRepository = favouriteRepository;
	}
	
	@Override
	public Favourite registerFPlayer(Favourite favourite) throws FavouritePlayerAlreadyExistsException {
		// TODO Auto-generated method stub
		Favourite r1=favouriteRepository.findByEmailIdAndPid(favourite.getEmailId(),favourite.getPid());
				 if (r1!=null) {
	          throw new FavouritePlayerAlreadyExistsException( "already exists");
	      }
		 favouriteRepository.save(favourite);
	      return favourite;
	}
	

	@Override
	public boolean deleteFPlayer(String favId) throws FavouritePlayerNotFoundException {
		// TODO Auto-generated method stub
		if(favouriteRepository.findById(favId).get()==null)
		{
			throw new FavouritePlayerNotFoundException("Favourite Player not found");
		}
		 favouriteRepository.delete(getFavouriteById(favId));
		 return true;
	}

	@Override
	public Favourite getFavouriteById(String favId) throws FavouritePlayerNotFoundException {
		// TODO Auto-generated method stub
		if (favouriteRepository.findById(favId).get()== null) {
	    	
	        throw new FavouritePlayerNotFoundException("Favourite Player does not exists");
	    }
	    return favouriteRepository.findById(favId).get();
	}

	@Override
	public Favourite[] getAllfavourites(String emailId) {
		// TODO Auto-generated method stub
		return favouriteRepository.findAllFavouriteByEmailId(emailId);
	}

}
