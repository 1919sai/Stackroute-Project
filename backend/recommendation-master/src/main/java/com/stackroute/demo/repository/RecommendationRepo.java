package com.stackroute.demo.repository;

import org.springframework.stereotype.Repository;

import com.stackroute.demo.model.Recommendation;

import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface RecommendationRepo extends JpaRepository<Recommendation,String> {
	public Recommendation[] findAllRecommendationByEmailId(String emailId);
	public Recommendation findByEmailIdAndPid(String emailId,String pid);
	
}
