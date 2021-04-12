package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="settings")
public class Settings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="IdUser")
    private Long idUser;

    @Column(name="range")
    private Long range;

    @Column(name="expiration")
    private Long expiration;

    @Column(name="resetOnLogin")
    private Long resetOnLogin;

    public Settings() {
    }

    public Settings(Long idUser,Long range, Long expiration, Long resetOnLogin) {
        this.idUser = idUser;
        this.range = range;
        this.expiration = expiration;
        this.resetOnLogin = resetOnLogin;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public Long getRange() {
        return range;
    }

    public void setRange(Long range) {
        this.range = range;
    }

    public Long getExpiration() {
        return expiration;
    }

    public void setExpiration(Long expiration) {
        this.expiration = expiration;
    }

    public Long getResetOnLogin() {
        return resetOnLogin;
    }

    public void setResetOnLogin(Long resetOnLogin) {
        this.resetOnLogin = resetOnLogin;
    }

    public void setId(Long id) { this.id = id; }

    public Long getId() { return id; }
}
