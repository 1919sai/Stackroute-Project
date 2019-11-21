package com.stackroute.demo.exception;

public class RecommendationAlreadyExistsException extends Exception{
	private static final long serialVersionUID = 1L;

	public RecommendationAlreadyExistsException(String message) {
        super(message);
	}
}
