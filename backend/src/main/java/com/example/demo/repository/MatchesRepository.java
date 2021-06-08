package com.example.demo.repository;
import com.example.demo.model.Matches;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchesRepository extends JpaRepository<Matches, Long> {

    public void deleteMatchesByIdMatching(Long idMatching);

    public Iterable<Matches> findMatchesByIdMatching(Long idMatching);
}