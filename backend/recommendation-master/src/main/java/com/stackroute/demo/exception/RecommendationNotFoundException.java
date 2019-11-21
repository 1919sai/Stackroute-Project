package com.stackroute.demo.exception;

public class RecommendationNotFoundException extends Exception{
	private static final long serialVersionUID = 1L;

	public RecommendationNotFoundException(String message) {
        super(message);
	}
}
