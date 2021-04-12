package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="idUser")
    private Long idUser;

    @Column(name="roleName")
    private String roleName;

    public Role() {
    }

    public Role(Long idUser, String roleName) {
        this.idUser = idUser;
        this.roleName = roleName;
    }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Long getIdUser() { return idUser; }

    public void setIdUser(Long idUser) { this.idUser = idUser; }

    public String getRoleName() { return roleName; }

    public void setRoleName(String roleName) { this.roleName = roleName; }
}
