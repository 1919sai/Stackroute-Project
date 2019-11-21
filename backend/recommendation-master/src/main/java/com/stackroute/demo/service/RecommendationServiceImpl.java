package com.stackroute.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.demo.exception.RecommendationAlreadyExistsException;
import com.stackroute.demo.exception.RecommendationNotFoundException;
import com.stackroute.demo.model.Recommendation;
import com.stackroute.demo.repository.RecommendationRepo;
@Service
public class RecommendationServiceImpl implements RecommendationService{
	@Autowired

	private RecommendationRepo recommendationRepository;


	public RecommendationServiceImpl(RecommendationRepo recommendationRepository) {
		super();
		this.recommendationRepository = recommendationRepository;
	}
	@Override
	public Recommendation registerrPlayer(Recommendation recommendation) throws RecommendationAlreadyExistsException {
		// TODO Auto-generated method stub
		Recommendation r1=recommendationRepository.findByEmailIdAndPid(recommendation.getEmailId(),recommendation.getPid());
		 if (r1!=null) {
	          throw new RecommendationAlreadyExistsException( "already exists");
	      }
		 recommendationRepository.save(recommendation);
	      return recommendation;
	}
	

	@Override
	public boolean deleterPlayer(String recId) throws RecommendationNotFoundException {
		// TODO Auto-generated method stub
		if(recommendationRepository.findById(recId).get()==null)
		{
			throw new RecommendationNotFoundException("Recommended Player not found");
		}
		 recommendationRepository.delete(getRecommendationById(recId));
		 return true;
	}

	@Override
	public Recommendation getRecommendationById(String recId) throws RecommendationNotFoundException {
		// TODO Auto-generated method stub
if (recommendationRepository.findById(recId).get()== null) {
	    	
	        throw new RecommendationNotFoundException("	Recommended Player does not exists");
	    }
	    return recommendationRepository.findById(recId).get();
	}
	

	public Recommendation[] getAllRecommends(String emailId) {
		// TODO Auto-generated method stub
		return recommendationRepository.findAllRecommendationByEmailId(emailId);
	}

	}



