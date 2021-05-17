package com.example.demo.controller;

import com.example.demo.manager.MatchesManager;
import com.example.demo.manager.SettingsManager;
import com.example.demo.model.Matches;
import com.example.demo.model.Settings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/matches")
public class MatchesController {

    private MatchesManager matches;

    @Autowired
    public MatchesController(MatchesManager matches) {
        this.matches = matches;
    }

    @GetMapping("/")
    public Optional<Matches> getMatchByID(@RequestParam Long index){
        return matches.findByIDUser(index);
    }

    @PostMapping("/")
    public Matches addMatch(@RequestBody Matches match) {
        return  matches.save(match);
    }

    @PutMapping
    public Matches updateMatch(@RequestBody Matches match) {
        return  matches.save(match);
    }

    @DeleteMapping
    public void deleteMatch(@RequestParam Long index){
        matches.delete(index);
    }
}


