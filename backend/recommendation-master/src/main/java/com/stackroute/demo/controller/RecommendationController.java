package com.stackroute.demo.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.demo.exception.RecommendationAlreadyExistsException;
import com.stackroute.demo.model.Recommendation;
import com.stackroute.demo.service.RecommendationService;

@RestController
@CrossOrigin
public class RecommendationController {
	@Autowired
	private RecommendationService recommendationService;

	public RecommendationController(RecommendationService recommendationService) {
		super();
		this.recommendationService = recommendationService;
	}
@PostMapping("/add")
	
    public ResponseEntity<?> registerrecom(@RequestBody Recommendation recommendation)
    {
    
        try {
            recommendationService.registerrPlayer(recommendation);
            return new ResponseEntity<String>("sucessfully register",HttpStatus.CREATED);
        } catch (RecommendationAlreadyExistsException e) {
            // TODO Auto-generated catch block
       // e.printStackTrace();
            return new ResponseEntity<String>("Already Exists",HttpStatus.CONFLICT);
        }
    }
@DeleteMapping("/del/{id}")
public ResponseEntity<?> deleteRecommendation(@PathVariable String id, HttpSession httpSession) {
    try {
          if(!recommendationService.deleterPlayer(id))
                throw new Exception("not found");
            else
                return new ResponseEntity<String>("Deleted Successfully", HttpStatus.OK);
       
    } catch(Exception e) {
        return new ResponseEntity<String>("Player not found", HttpStatus.NOT_FOUND);
    }

}
@GetMapping("/find/{id}")
public ResponseEntity<?> getRecommendation(@PathVariable String id, HttpSession httpSession,@RequestBody Recommendation recommendation) {
    try {
    	Recommendation sid=recommendationService.getRecommendationById(id);
          if(sid==null)
                throw new Exception("not found");
            else
                return new ResponseEntity<String>("Player Found", HttpStatus.OK);
       
    } catch(Exception e) {
        return new ResponseEntity<String>("Player not found", HttpStatus.NOT_FOUND);
    }

}
@GetMapping("/recommends/{emailId}")
public ResponseEntity<?> getAllRecommends(@PathVariable String emailId) {
	Recommendation[] recommend = recommendationService.getAllRecommends(emailId);
	if (recommend != null) {
		return new ResponseEntity<Recommendation[]>(recommend, HttpStatus.OK);
	}
	return new ResponseEntity<String>("no recommends available", HttpStatus.NOT_FOUND);

}

}
