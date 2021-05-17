package com.example.demo.repository;

import com.example.demo.model.Matches;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MatchesRepository extends CrudRepository<Matches, Long> {

    Optional<Matches> findMatchesByIdUser(Long id);

}
