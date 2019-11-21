package com.stackroute.demo.service;

import com.stackroute.demo.exception.RecommendationAlreadyExistsException;
import com.stackroute.demo.exception.RecommendationNotFoundException;
import com.stackroute.demo.model.Recommendation;

public interface RecommendationService {
	Recommendation registerrPlayer(Recommendation recommendation) throws RecommendationAlreadyExistsException;
	boolean deleterPlayer(String pid) throws RecommendationNotFoundException;
    Recommendation getRecommendationById(String pid ) throws RecommendationNotFoundException;
	Recommendation[] getAllRecommends(String emailId);
	


}
