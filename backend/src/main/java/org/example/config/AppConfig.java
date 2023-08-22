package org.example.config;

import org.example.repository.CourseRepository;
import org.example.service.CourseService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("org.example")
public class AppConfig {
//  @Bean("courseRepository")
//  public CourseRepository getCourseRepository(){
//    return new CourseRepository();
//  }
//
//  @Bean("courseService")
//  public CourseService getCourseService(){
//    return new CourseService(getCourseRepository());
//  }
}
