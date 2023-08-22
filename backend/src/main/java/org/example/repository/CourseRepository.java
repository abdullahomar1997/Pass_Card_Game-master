package org.example.repository;

import org.example.model.Course;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class CourseRepository implements CrudRepository {
  @Override
  public List findAll() {

    List<Course> courses = new ArrayList<>();
    Course springBoot = new Course(1,
            "Getting Started with Spring boot 2",
            "Learn How to build real Applications with Springboot",
            "https://www.google.com");

    courses.add(springBoot);

    return courses;
  }
}
