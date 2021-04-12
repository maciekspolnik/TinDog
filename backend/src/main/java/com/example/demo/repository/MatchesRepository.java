package com.example.demo.repository;

import com.example.demo.model.Matches;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchesRepository extends CrudRepository<Matches, Long> {


}
