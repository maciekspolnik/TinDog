package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="matches")
public class Matches {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="id_matched_who")
    private Long id_matched_who;

    @Column(name="id_matched_whom")
    private Long id_matched_whom;

    @Column(name="time_to_expire")
    private Long time_to_expire;

    public Matches() {
    }

    public Matches(Long id_matched_who, Long id_matched_whom, Long time_to_expire) {
        this.id_matched_who = id_matched_who;
        this.id_matched_whom = id_matched_whom;
        this.time_to_expire = time_to_expire;
    }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Long getId_matched_who() { return id_matched_who; }

    public void setId_matched_who(Long id_matched_who) { this.id_matched_who = id_matched_who; }

    public Long getId_matched_whom() { return id_matched_whom; }

    public void setId_matched_whom(Long id_matched_whom) { this.id_matched_whom = id_matched_whom; }

    public Long getTime_to_expire() { return time_to_expire; }

    public void setTime_to_expire(Long time_to_expire) { this.time_to_expire = time_to_expire; }
}
