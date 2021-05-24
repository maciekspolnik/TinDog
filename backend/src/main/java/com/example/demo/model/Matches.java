package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="matches")
public class Matches {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_matches;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_matched_who")
    private Users id_user;

    @Column(name="id_matched_whom")
    private Long id_matched;

    @Column(name="time_to_expire")
    private Long time_to_expire;

    public Matches() {
    }

    public Matches(Users user, Long id_matched_whom, Long time_to_expire) {
        this.id_user = user;
        this.id_matched = id_matched_whom;
        this.time_to_expire = time_to_expire;
    }

    public Long getId() { return id_matches; }

    public void setId(Long id) { this.id_matches = id; }

    public Long getIdUser() { return id_user.getId(); }

    public void setIdUser(Users id_user) { this.id_user = id_user; }

    public Long getId_matched() { return id_matched; }

    public void setId_matched(Long id_matched) { this.id_matched = id_matched; }

    public Long getTime_to_expire() { return time_to_expire; }

    public void setTime_to_expire(Long time_to_expire) { this.time_to_expire = time_to_expire; }
}
