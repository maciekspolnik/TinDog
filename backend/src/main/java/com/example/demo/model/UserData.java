package com.example.demo.model;
import javax.persistence.*;

@Entity
@Table(name= "user_data")
public class UserData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "userDetails")
    private Users users;

    private String dog_name;
    private String img_url;
    private String owner;
    private String contact;

    public UserData() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
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

    public UserData(Users users, String dog_name, String img_url, String owner, String contact) {
        this.users = users;
        this.dog_name = dog_name;
        this.img_url = img_url;
        this.owner = owner;
        this.contact = contact;
    }
}
