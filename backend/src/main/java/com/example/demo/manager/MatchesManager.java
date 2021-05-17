package com.example.demo.manager;

import com.example.demo.model.Matches;
import com.example.demo.repository.MatchesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MatchesManager {

    private MatchesRepository matchesRepository;

    @Autowired
    public MatchesManager(MatchesRepository matchesRepository){
        this.matchesRepository = matchesRepository; }

    public Optional<Matches> findByIDUser(Long id){
        return matchesRepository.findMatchesByIdUser(id); }

    public Matches save(Matches match){
        return matchesRepository.save(match); }

    public void delete(Long id){
        matchesRepository.deleteById(id); }

}
