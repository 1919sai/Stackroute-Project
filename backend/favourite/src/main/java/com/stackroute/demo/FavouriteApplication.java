package com.stackroute.demo;

import org.springframework.boot.SpringApplication;


import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan (basePackages="com.stackroute.demo")
@SpringBootApplication
public class FavouriteApplication {

	public static void main(String[] args) {
		SpringApplication.run(FavouriteApplication.class, args);
	}

}
