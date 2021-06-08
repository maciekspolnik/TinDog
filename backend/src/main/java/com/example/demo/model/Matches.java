package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="matches")
public class Matches {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idMatches;

    @Column(name = "id_matching")
    private Long idMatching;

    @Column(name = "id_matched")
    private Long idMatched;

    public Matches() {
    }

    public Matches(Long id_matching, Long id_matched) {
        this.idMatching = id_matching;
        this.idMatched = id_matched;
    }

    public Long getIdMatches() {
        return idMatches;
    }

    public void setIdMatches(Long id_matches) {
        this.idMatched = id_matches;
    }

    public Long getIdMatching() {
        return idMatching;
    }

    public void setIdMatching(Long id_matching) {
        this.idMatching = id_matching;
    }

    public Long getIdMatched() {
        return idMatched;
    }

    public void setIdMatched(Long id_matched) {
        this.idMatched = id_matched;
    }
}