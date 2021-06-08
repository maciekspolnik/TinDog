package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name= "user_data")
public class UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_details;

    @JsonManagedReference
    @OneToOne(fetch = FetchType.LAZY, mappedBy = "userDetails", cascade=CascadeType.ALL)
    private Users user;

    private String dog_name;
    private String img_url;
    private String owner;
    private String contact;

    public UserDetails() {
    }

    public Long getId() {
        return id_details;
    }

    public void setId(Long id) {
        this.id_details = id;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users users) {
        this.user = users;
    }

    public String getDog_name() {
        return dog_name;
    }

    public void setDog_name(String dog_name) {
        this.dog_name = dog_name;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public UserDetails(String dog_name, String img_url, String owner, String contact) {
        this.dog_name = dog_name;
        this.img_url = img_url;
        this.owner = owner;
        this.contact = contact;
    }

}
