package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="session")
public class Session {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="id_user")
    private Long id_user;

    @Column(name="token")
    private String token;

    @Column(name="expiration")
    private String expiration;

    public Session() {
    }

    public Session(Long id_user, String token, String expiration) {
        this.id_user = id_user;
        this.token = token;
        this.expiration = expiration;
    }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Long getId_user() { return id_user; }

    public void setId_user(Long id_user) { this.id_user = id_user; }

    public String getToken() { return token; }

    public void setToken(String token) { this.token = token; }

    public String getExpiration() { return expiration; }

    public void setExpiration(String expiration) { this.expiration = expiration; }
}
