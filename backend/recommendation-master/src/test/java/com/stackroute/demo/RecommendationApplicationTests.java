package com.stackroute.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.stackroute.demo.exception.RecommendationNotFoundException;
import com.stackroute.demo.model.Recommendation;
import com.stackroute.demo.repository.RecommendationRepo;
import com.stackroute.demo.service.RecommendationServiceImpl;




@SpringBootTest
public class RecommendationApplicationTests {

@InjectMocks
RecommendationServiceImpl recService;

    @Mock
    RecommendationRepo recommendationRepository;
    Recommendation rec;


    List<Recommendation> recList = null;
   Optional<Recommendation> options;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
       
        rec = new  Recommendation();
      rec.setRecId("12345");
        rec.setPid("123");
        rec.setName("johnpass");
         rec.setImageURL("");
        rec.setEmailId("johnpass@gmail.com");
        recList = new ArrayList<>();
        recList.add(rec);


        options = Optional.of(rec);


    }
       


       

        @Test
        public void deletePlayer() throws  RecommendationNotFoundException {
            when(recommendationRepository.findById(rec.getRecId())).thenReturn(options);
            boolean flag = recService.deleterPlayer(rec.getRecId());
            assertEquals(true, flag);

       
       
       
}
}

/*
package com.stackroute.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class RecommendationApplicationTests {

	@Test
	void contextLoads() {
	}

}
*/