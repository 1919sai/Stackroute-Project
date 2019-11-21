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

import com.stackroute.demo.exception.FavouritePlayerAlreadyExistsException;
import com.stackroute.demo.model.Favourite;
import com.stackroute.demo.service.FavouriteService;

@RestController
@CrossOrigin
public class FavouriteController {
	@Autowired
	private FavouriteService favouriteService;

	public FavouriteController(FavouriteService favouriteService) {
		super();
		this.favouriteService = favouriteService;
	}
	
@PostMapping("/add")
	
    public ResponseEntity<?> registerFavourite(@RequestBody Favourite favourite)
    {
    
        try {
            favouriteService.registerFPlayer(favourite);
            return new ResponseEntity<String>("sucessfully register",HttpStatus.CREATED);
        } catch (FavouritePlayerAlreadyExistsException e) {
            // TODO Auto-generated catch block
        //e.printStackTrace();
            return new ResponseEntity<String>("Already Exists",HttpStatus.CONFLICT);
        }
    }
        @DeleteMapping("del/{id}")
        public ResponseEntity<?> deleteFavourite(@PathVariable String id, HttpSession httpSession) {
            try {
                  if(!favouriteService.deleteFPlayer(id))
                        throw new Exception("not found");
                    else
                        return new ResponseEntity<String>("Deleted Successfully", HttpStatus.OK);
               
            } catch(Exception e) {
                return new ResponseEntity<String>("Player not found", HttpStatus.NOT_FOUND);
            }
        
    }
        @GetMapping("/find/{id}")
        public ResponseEntity<?> getFavouriteByEmail(@PathVariable String id, HttpSession httpSession,@RequestBody Favourite favourite) {
            try {
            	Favourite fid=favouriteService.getFavouriteById(id);
                  if(fid==null)
                        throw new Exception("Not found");
                    else
                        return new ResponseEntity<String>("Player Found", HttpStatus.OK);
               
            } catch(Exception e) {
                return new ResponseEntity<String>("Player not found", HttpStatus.NOT_FOUND);
            }

        }

@GetMapping("/favourites/{emailId}")
public ResponseEntity<?> getAllFavourites(@PathVariable String emailId) {
	Favourite[] favourite = favouriteService.getAllfavourites(emailId);
	if (favourite != null) {
		return new ResponseEntity<Favourite[]>(favourite, HttpStatus.OK);
	}
	return new ResponseEntity<String>("No Favourites available", HttpStatus.NOT_FOUND);

}

	
}
