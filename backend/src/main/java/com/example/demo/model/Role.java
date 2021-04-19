package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_role;

    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="id_user")
    private User idUser;

    @Column(name="role_name")
    private String roleName;

    public Role() {
    }

    public Role(User idUser, String roleName) {
        this.idUser = idUser;
        this.roleName = roleName;
    }

    public Long getId() { return id_role; }

    public void setId(Long id) { this.id_role = id; }

    public Long getIdUser() { return idUser.getId(); }

    public void setIdUser(User idUser) { this.idUser = idUser; }

    public String getRoleName() { return roleName; }

    public void setRoleName(String roleName) { this.roleName = roleName; }
}
