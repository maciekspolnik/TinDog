package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="session")
public class Session {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_session;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="id_user")
    private Users id_user;

    private String token;

    private String expiration;

    public Session() {
    }

    public Session(Users id_user, String token, String expiration) {
        this.id_user = id_user;
        this.token = token;
        this.expiration = expiration;
    }

    public Long getId() { return id_session; }

    public void setId(Long id) { this.id_session = id; }

    public Users getId_user() { return id_user; }

    public void setId_user(Users id_user) { this.id_user = id_user; }

    public String getToken() { return token; }

    public void setToken(String token) { this.token = token; }

    public String getExpiration() { return expiration; }

    public void setExpiration(String expiration) { this.expiration = expiration; }
}
