package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="settings")
public class Settings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_settings;

    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="id_user")
    private User id_user;

    @Column(name="range")
    private Long range;

    @Column(name="expiration")
    private Long expiration;

    @Column(name="resetOnLogin")
    private Long resetOnLogin;

    public Settings() {
    }

    public Settings(User id_user,Long range, Long expiration, Long resetOnLogin) {
        this.id_user = id_user;
        this.range = range;
        this.expiration = expiration;
        this.resetOnLogin = resetOnLogin;
    }

    public Long getIdUser() {
        return id_user.getId();
    }

    public void setIdUser(User id_user) {
        this.id_user = id_user;
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

    public void setId(Long id) { this.id_settings = id; }

    public Long getId() { return id_settings; }
}
