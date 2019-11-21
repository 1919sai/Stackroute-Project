package com.stackroute.demo.exception;

public class FavouritePlayerAlreadyExistsException extends Exception{
	private static final long serialVersionUID = 1L;

	public FavouritePlayerAlreadyExistsException(String message) {
        super(message);
    }
}
