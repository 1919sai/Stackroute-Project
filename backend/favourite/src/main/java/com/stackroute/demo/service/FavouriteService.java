package com.stackroute.demo.service;

import com.stackroute.demo.exception.FavouritePlayerAlreadyExistsException;
import com.stackroute.demo.exception.FavouritePlayerNotFoundException;
import com.stackroute.demo.model.Favourite;

public interface FavouriteService {
	Favourite registerFPlayer(Favourite favourite) throws FavouritePlayerAlreadyExistsException;
	 boolean deleteFPlayer(String pid) throws FavouritePlayerNotFoundException;
    Favourite getFavouriteById(String pid ) throws FavouritePlayerNotFoundException;
	Favourite[] getAllfavourites(String emailId);

}
