package com.example.demo.controller;

import com.example.demo.model.Matches;
import com.example.demo.repository.MatchesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/matches")
public class MatchesController {

    @Autowired
    private MatchesRepository matchesRepository;

    @GetMapping("/list")
    public Set<Long> getMatchedIdsByIdMatched(
            @RequestParam Long index){
        Iterable<Matches> data = matchesRepository.findMatchesByIdMatching(index);
        Set<Long> list = new HashSet<>();
        for(Matches o :data){
            list.add(o.getIdMatched());
        }
        return list;
    }

    @PostMapping("/add")
    public Matches addMatch(@RequestBody Matches match){
        return matchesRepository.save(new Matches(match.getIdMatching(),match.getIdMatched()));
    }

    @DeleteMapping("/delete")
    @Transactional
    public void deleteMatchesById(
            @RequestParam Long id){
        matchesRepository.deleteMatchesByIdMatching(id);
    }

}