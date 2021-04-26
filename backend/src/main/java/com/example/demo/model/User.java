package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_user;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="dog_name")
    private String dogName;

    @Column(name="contact")
    private String contact;

    @Column(name="photo")
    private String photo_url;

    @Column(name="dog_photo")
    private String dog_photo_url;

    @Column(name="age")
    private String age;

    public User(){

    }

    public User(String email, String password, String firstName, String lastName, String dogName, String contact, String photo_url, String dog_photo_url, String age) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dogName = dogName;
        this.contact = contact;
        this.photo_url = photo_url;
        this.dog_photo_url = dog_photo_url;
        this.age = age;
    }

    public Long getId() {
        return id_user;
    }

    public void setId(Long id) {
        this.id_user = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public void setId(long id) { this.id_user = id; }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }

    public String getPhoto_url() { return photo_url; }

    public void setPhoto_url(String photo_url) { this.photo_url = photo_url; }

    public String getDog_photo_url() { return dog_photo_url; }

    public void setDog_photo_url(String dog_photo_url) { this.dog_photo_url = dog_photo_url; }

    public String getAge() { return age; }

    public void setAge(String age) { this.age = age; }

    public String getDogName() { return dogName; }

    public void setDogName(String dogName) { this.dogName = dogName; }
}