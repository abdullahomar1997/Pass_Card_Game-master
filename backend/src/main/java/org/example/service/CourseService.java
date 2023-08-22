package org.example.service;

import org.example.model.Course;
import org.example.repository.CourseRepository;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class CourseService implements crudService {

  private CourseRepository repository;

  public CourseService(CourseRepository courseRepository) {
    repository = courseRepository;
  }

  @Override
  public List list() {
    return repository.findAll();
  }

  @Override
  public Object create(Object o) {
    return null;
  }

  @Override
  public Optional get(int id) {
    return Optional.empty();
  }

  @Override
  public void update(Object o, int id) {

  }

  @Override
  public void delete(int id) {

  }
}
