package com.stackroute.demo;

import static org.mockito.Mockito.when;


import java.util.ArrayList;
import java.util.List;
import static org.junit.Assert.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Optional;

import org.junit.Before;
import static org.mockito.ArgumentMatchers.any;


import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.stackroute.demo.exception.FavouritePlayerAlreadyExistsException;
import com.stackroute.demo.exception.FavouritePlayerNotFoundException;
import com.stackroute.demo.model.Favourite;
import com.stackroute.demo.repository.FavouriteRepo;
import com.stackroute.demo.service.FavouriteServiceImpl;


public class FavouriteApplicationTests {
@InjectMocks
FavouriteServiceImpl favService;

    @Mock
    FavouriteRepo favouriteRepository;
    Favourite fav;


    List<Favourite> favList = null;
    Optional<Favourite> options;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
       
        fav = new  Favourite();
      fav.setFavId("12345");
        fav.setPid("123");
        fav.setName("johnpass");
         fav.setImageURL("");
        fav.setEmailId("johnpass@gmail.com");

       
       
       
        favList = new ArrayList<>();

        options = Optional.of(fav);
    }
//    @Test
//    public void registerUserSuccess() throws FavouritePlayerNotFoundException {
//        when(favouriteRepository.save((Favourite) any())).thenReturn(fav);
//        Favourite favSaved = favService.registerFPlayer(fav);
//        assertEquals(fav, favSaved);
       
        @Test
        public void deleteFPlayer() throws  FavouritePlayerNotFoundException {
            when(favouriteRepository.findById(fav.getFavId())).thenReturn(options);
            boolean flag = favService.deleteFPlayer(fav.getFavId());
            assertEquals(true, flag);

   


}
}

/*
package com.stackroute.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class FavouriteApplicationTests {

	@Test
	void contextLoads() {
	}

}
*/