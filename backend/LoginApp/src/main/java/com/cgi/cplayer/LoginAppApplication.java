package com.cgi.cplayer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.ComponentScan;

import com.cgi.cplayer.jwtfilter.JwtMyFilter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;


@ComponentScan(basePackages="com.cgi")
@SpringBootApplication
public class LoginAppApplication {
	
	@Bean
	public FilterRegistrationBean jwtFilter() {
	final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
	registrationBean.setFilter(new JwtMyFilter());
	registrationBean.addUrlPatterns("/api/*");
	return registrationBean;
	}

	public static void main(String[] args) {
		SpringApplication.run(LoginAppApplication.class, args);
	}

}
