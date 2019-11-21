package com.stackroute.demo.exception;

public class FavouritePlayerNotFoundException extends Exception{
	private static final long serialVersionUID = 1L;

	public FavouritePlayerNotFoundException(String message) {
        super(message);
	}
}
